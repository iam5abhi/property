import { getXataClient } from '../../../src/xata';
const xata = getXataClient();

const handler = async (req, res) => {
  const { id, logo,alternatePhoneNumber,email,phoneNumber,about,address,location } = req.body;
  const results = await xata.db.homePage.createOrUpdate(id,{
    logo,
    alternatePhoneNumber,
    email,
    phoneNumber,
    about,
    address,
    location
  });
  res.send(results);
};

export default handler;