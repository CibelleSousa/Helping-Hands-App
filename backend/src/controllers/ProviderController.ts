import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { ProviderCardResponse } from "../interfaces/providerCard.interface";
import { ProviderProfileResponse } from "../interfaces/providerProfile.interface";
import { formatAvailabilityString } from "../utils/availabilityFormat";

// ServiceList
export const listProviders = async (req: Request, res: Response) => {
    try {
        // Verifica se o usuário já foi autenticado
        const userID = req.user?.id;
        if (!userID) {
            return res.status(401).json({ error: 'Usuário não autenticado!' });
        }

        // Busca a View
        const providerCardView = await prisma.vw_ProviderCard.findMany();

        // Busca os favoritos
        const favorites = await prisma.userFavoriteServiceSuplier.findMany({
            where: { AppUserID: userID },
            select: { ServiceSuplierID: true }
        });
        const myFavoritesIDs = favorites.map(f => f.ServiceSuplierID);

        // Resposta Final
        const response: ProviderCardResponse[] = providerCardView.map(provider => ({
            id: provider.ID,
            name: provider.Nome,
            urlPhoto: provider.UrlFoto,
            category: provider.Nome,
            avaregeRate: Number(provider.NotaMedia),
            reviewCount: Number(provider.QtdAvaliacoes),
            isFavorite: myFavoritesIDs.includes(provider.ID)
        }));

        res.json(response);

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao listar os prestadores' });
    }
}

// ServiceInfo
export const getProviderById = async (req: Request, res: Response) => {
    const { id } = req.params;

    // Verifica se o id é válido
    const providerID = Number(id);
    if(isNaN(providerID) || !Number.isInteger(providerID)){
        return res.status(400).json({error: 'ID do prestador inválido'});
    }

    // Verifica autenticação
    const userID = req.user?.id;
    if (!userID) {
        return res.status(401).json({ error: 'Usuário não autenticado!' })
    }

    try {

        // Busca view
        const profile = await prisma.vw_ProviderInfo.findFirst({
            where: { ID: Number(id) }
        });
        if (!profile) {
            return res.status(404).json({ error: 'Prestador não foi encontrado.' });
        }

        // Busca disponibilidade e destaques
        const details = await prisma.serviceSuplier.findUnique({
            where: { ServiceSuplierID: Number(id) },
            select: {
                ServiceSuplierAvailability: true,
                ServiceSuplierHighlight: {
                    include: { Highlight: true }
                }
            }
        });

        // Busca os favoritos
        const isFavorite = await prisma.userFavoriteServiceSuplier.findUnique({
            where: {
                AppUserID_ServiceSuplierID: {
                    AppUserID: userID,
                    ServiceSuplierID: Number(id)
                }
            }
        });

        // Resposta Final
        const response: ProviderProfileResponse = {
            id: profile.ID,
            name: profile.Name,
            urlPhoto: profile.UrlPhoto,
            category: profile.Category,
            avaregeRate: Number(profile.RateAvarege),
            reviewCount: Number(profile.ReviewCount),
            isFavorite: !!isFavorite,

            // Campos específicos de service info
            focus: profile.Focus,
            profileText: profile.ProfileText,
            experienceText: profile.ExperienceText,

            // Tratamento das listas
            availability: formatAvailabilityString(details?.ServiceSuplierAvailability || []),
            highlight: details?.ServiceSuplierHighlight.map(h => h.Highlight.Content) || []
        };

        res.status(200).json(response);

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao buscar detalhes' });
    }
}