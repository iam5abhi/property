// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getXataClient } from "../../../src/xata";
const xata = getXataClient();

const handler = async (req, res) => {

  const { id, ProjectID, phoneNumber, name, email, expactedBudget, budget, status, } = req.body;
  const results = await xata.db.QueryForm.createOrUpdate(id,{
    ProjectID, 
    phoneNumber,
    name,
    email,
    expactedBudget,
    budget,
    status,
  });
  res.send(results);
};

export default handler;
