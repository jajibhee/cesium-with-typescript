import { NextApiRequest, NextApiResponse } from 'next'
import { sampleMaterialsData } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleMaterialsData)) {
      throw new Error('Cannot find materials data')
    }

    res.status(200).json(sampleMaterialsData)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
