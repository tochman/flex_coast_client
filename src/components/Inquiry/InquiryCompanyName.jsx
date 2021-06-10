import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryCompanyName = () => {
  const { t } = useTranslation()

  return (
    <div data-cy='company-name-container'>
      <Question text={t('question.name')} />
      <Answer
        text={t('answer.name')}
        type='text'
        placeholder='my company'
        questionKey='name'
      />
    </div>
  )
}

export default InquiryCompanyName
