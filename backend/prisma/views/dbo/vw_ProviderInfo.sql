SELECT
  P.ServiceSuplierID AS ID,
  U.FullName AS Name,
  U.ProfilePhoto AS UrlPhoto,
  C.Name AS Category,
  P.RatingAvarege AS RateAvarege,
  P.FocusDescription AS Focus,
  P.Bio AS ProfileText,
  P.Experience AS ExperienceText,
  COUNT(R.ID) AS ReviewCount
FROM
  ServiceSuplier AS P
  JOIN AppUser AS U ON P.ServiceSuplierID = U.ID
  JOIN ServiceCategory AS C ON P.ServiceCategoryID = C.ID
  LEFT JOIN Review AS R ON P.ServiceSuplierID = R.ServiceSuplierID
GROUP BY
  P.ServiceSuplierID,
  U.FullName,
  U.ProfilePhoto,
  C.Name,
  P.RatingAvarege,
  P.FocusDescription,
  P.Bio,
  P.Experience;