const Workout = require("../models/Workout")
const mongoose = require('mongoose')


// get all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1});
        res.status(200).json({ workouts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//get a single workout 
const getWorkout = async(req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Invalid workout id"})
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({msg:"workout not found"})  
    } 
    res.status(200).json({workout})
}

// create a new workout
const createWorkout = async(req,res) => {
    const {title, load, reps} = req.body
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json({workout})
    }catch(error){
        res.status(400).json({error: error.massage})
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedWorkout = await Workout.findByIdAndDelete(id);
        if (!deletedWorkout) {
            return res.status(404).json({ msg: "Workout not found" });
        }
        res.status(200).json({ msg: "Workout deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    const { title, load, reps } = req.body;
    try {
        // Find the workout by ID and update its data
        const updatedWorkout = await Workout.findByIdAndUpdate(id,
            ...req.body,
        );
        if (!updatedWorkout) {
            return res.status(404).json({ msg: "Workout not found" });
        }
        res.status(200).json({ workout: updatedWorkout });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}