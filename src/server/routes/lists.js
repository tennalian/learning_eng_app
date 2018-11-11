import express from "express";
import mongoose from "mongoose";
import { List } from '../models/list';

const router = express.Router();

router.get("/lists", (req, res) => {
  List.find()
    .select('_id word')
    .exec()
    .then(items => {
      const response = {
        total: items.length,
        words: items
      }
      res.status(200).json(response);
    })
    .catch(err => res.status(500).json({error: err}));
});

router.post("/words", (req, res) => {
  const list = new List({
    _id: new mongoose.Types.ObjectId(),
    word: req.body.wordId
  });
  word.save()
    .then(item => {
      const result = {
        _id: item._id,
        value: item.value,
        translate: item.translate,
        type: item.type
      };
      res.status(200).json(result);
    })
    .catch(err => res.status(500).json({error: err}));
});


router.get("/words/:id", (req, res) => {
  const id = req.params.id
  Word.findById(id)
    .select('_id value translate type')
    .exec()
    .then(item => {
      if (item) {
        res.status(200).json({word: item});
      } else {
        res.status(404).json({ message: 'No provided ID'});
      }
    })
    .catch(err => res.status(500).json({error: err}))
});

router.delete("/words/:id", (req, res) => {
  const id = req.params.id;
  Word.remove({ _id: id })
    .exec()
    .then(() => res.status(200).json({ message: 'Deleting is successful'}))
    .catch(err => res.status(500).json({error: err}))
});

router.patch("/words/:id", (req, res) => {
  const id = req.params.id;
  Word.update({ _id: id }, { $set: req.body })
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({error: err}))
});

export default router;
