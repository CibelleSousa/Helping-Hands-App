SELECT
  P.ServiceSuplierID AS ID,
  U.FullName AS Nome,
  U.ProfilePhoto AS UrlFoto,
  C.Name AS Categoria,
  ISNULL(AVG(CAST(R.Rate AS DECIMAL(3, 2))), 0) AS NotaMedia,
  COUNT(R.ID) AS QtdAvaliacoes
FROM
  ServiceSuplier AS P
  JOIN AppUser AS U ON P.ServiceSuplierID = U.ID
  JOIN ServiceCategory AS C ON P.ServiceCategoryID = C.ID
  LEFT JOIN Review AS R ON P.ServiceSuplierID = R.ServiceSuplierID
GROUP BY
  P.ServiceSuplierID,
  U.FullName,
  U.ProfilePhoto,
  C.Name;