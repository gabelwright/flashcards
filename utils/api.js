import {AsyncStorage} from 'react-native'

const DECK_STORAGE_KEY = 'UdacityFlashcards:decks'

export function getDecks(){
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      return JSON.parse(results)
    })
}

export function getCards(deckId){

}

export function addDeck({id, deck}){
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [id]: deck
  }))
}

export function removeDeck(deckId){
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[deckId] = undefined
      delete data[deckId]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
      return data
    })
}

export function addCard(card, deckId){

}

export function removeCard(cardId){

}
