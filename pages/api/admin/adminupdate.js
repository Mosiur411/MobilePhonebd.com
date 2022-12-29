import AdminModel from "../../../modal/admin/admin.model"
import connectDatabase from "../../../utils/bd"
const UpdateAdmin = async (req, res) => {
    try {
        await connectDatabase()
        const ID = req.body._id
        if (ID) {
            const data = req.body
            const adminUpdate = await AdminModel.findByIdAndUpdate(ID, data, { new: true })
            if (!adminUpdate) return res.status(404).json({ error: "NeedData not exists" })
            const result = await adminUpdate.save()
            return res.status(200).json({ result })
        }
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default UpdateAdmin;