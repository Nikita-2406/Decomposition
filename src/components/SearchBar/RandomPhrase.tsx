// показывает случайную фразу и подписю найдется все

interface IRandomPhraseProps {
  randomPhraseList: Array<string>
}

export const RandomPhrase = ({randomPhraseList}: IRandomPhraseProps) => { 
  const randomIdPhrase = Math.floor(Math.random() * randomPhraseList.length)
  return (
    <div>Найдется всё. Например: {randomPhraseList[randomIdPhrase]}</div>
  )
}
