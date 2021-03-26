import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  subRating: {
    price: { type: Number },
    availability: { type: Number },
    comfortability: { type: Number }
  },
  text: { type: String, maxlength: 300 },
  reviewOwner: { type: mongoose.Schema.Types.ObjectID, ref: 'User' }
}, {
  timestamps: true
})

reviewSchema
  .set('toJSON', { virtuals: true })

reviewSchema
  .virtual('overallRating')
  .get(function() {
    const ratingsArray = Object.values(this.subRating)
    const sum = ratingsArray.reduce((acc, curr) => {
      return acc + curr
    }, 0)
    const average = sum / ratingsArray.length
    console.log('average>>>>>>>>>>>>', average)
    return average
  })

export default reviewSchema