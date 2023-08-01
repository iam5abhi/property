// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getXataClient } from "../../../src/xata";
const xata = getXataClient();

const handler = async (req, res) => {
  // const { Amenities, AboutProject,  ProjectName, Sector, ProjectPhotos, 
  // ProjectBrochure, PriceStartsfrom, PricePerSQFT, Nooffloors, AvailableFrom, } = req.body
  const data = await xata.db.property.create(req.body);
  res.send(data);
};

export default handler;
