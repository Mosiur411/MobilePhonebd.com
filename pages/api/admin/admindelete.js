import AdminModel from "../../../modal/admin/admin.model"
import connectDatabase from "../../../utils/bd"

const DeleteAdmin = async (req, res) => {
    try {
        await connectDatabase()
        const ID = req.body._id
        if (!ID) return res.status(403).json({ error: 'NeedData does not exists.' })
        const deleted = await AdminModel.deleteOne({ _id: ID })
        return res.status(200).json({ deleted })
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default DeleteAdmin;