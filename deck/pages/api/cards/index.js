import { Deck } from "../../../lib/deck";

const deck = new Deck()
const table = deck.dispatchCards(5)

export default function handler(req, res) {
    res.status(200)
    .json({
        deck: deck.cards,
        table: table
    
    })
  }