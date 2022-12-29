import AdminModel from "../../../modal/admin/admin.model"
import connectDatabase from "../../../utils/bd";


const CreateProduct = async (req, res) => {
    try {
        await connectDatabase()
        const user = req.body;
        const adminInfo = await AdminModel(user)
        if (!adminInfo) return res.status(404).json({ error: "NeedData not exists" })
        const result = await adminInfo.save()
        console.log(result)
        return res.status(200).json({ data: result })
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default CreateProduct;
