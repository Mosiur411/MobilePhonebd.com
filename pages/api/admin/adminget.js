import AdminModel from "../../../modal/admin/admin.model"
import connectDatabase from "../../../utils/bd"


const GetAdmin = async (req, res) => {
    try {
        await connectDatabase()
        const data = await AdminModel.find({})
        return res.status(200).json({ data })
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default GetAdmin;