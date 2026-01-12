import mongoose from 'mongoose';

const homeheroSchema = new mongoose.Schema({
    title : String
});

const HomeHero = mongoose.model('HomeHero' , homeheroSchema);

export default HomeHero;