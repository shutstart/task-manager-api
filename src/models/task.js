const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
        timestamps: true
    })

taskSchema.pre('save', async function () {
    const task = this
    console.log('before saving task!')
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task