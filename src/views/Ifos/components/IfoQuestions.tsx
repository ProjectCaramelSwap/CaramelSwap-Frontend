import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Card, CardHeader, CardBody, Flex } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import FoldableText from 'components/FoldableText'

const ImageWrapper = styled.div`
  flex: none;
  order: 2;
  width: 224px;

  ${({ theme }) => theme.mediaQueries.md} {
    order: 1;
  }
`

const DetailsWrapper = styled.div`
  order: 1;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    order: 2;
    margin-bottom: 0;
    margin-left: 40px;
  }
`

const IfoQuestions = () => {
  const TranslateString = useI18n()

  return (
    <Flex alignItems={['center', null, null, 'start']} flexDirection={['column', null, null, 'row']}>
      <ImageWrapper>
        <img src="/images/ifo-bunny.png" alt="ifo bunny" width="224px" height="208px" />
      </ImageWrapper>
      <DetailsWrapper>
        <Card>
          <CardHeader>
            <Heading size="lg" color="secondary">
              {TranslateString(999, 'Details')}
            </Heading>
          </CardHeader>
          <CardBody>
            <FoldableText
              mb="24px"
              title={TranslateString(999, "What's the difference between a Basic Sale and Unlimited Sale?")}
            >
              <Text color="textSubtle" as="p">
                TBD
              </Text>
            </FoldableText>
            <FoldableText mb="24px" title={TranslateString(999, 'Which sale should I commit to? Can I do both?')}>
              <Text color="textSubtle" as="p">
                {TranslateString(999, 'You can choose one or both at the same time!')}
              </Text>
              <Text color="textSubtle" as="p">
                {TranslateString(
                  999,
                  'We recommend using the Basic Sale first for most users, because the amount of tokens you can get for your LP Tokens should be a little higher than in the Unlimited Sale.',
                )}
              </Text>
            </FoldableText>
            <FoldableText mb="24px" title={TranslateString(999, 'Will my purchase')}>
              <Text color="textSubtle" as="p">
                {TranslateString(
                  999,
                  'Response to open question goes here. Here is text answering the question which is open. Response to open question goes here. Here is text answering the question which is open.',
                )}
              </Text>
            </FoldableText>
            <FoldableText title={TranslateString(999, 'Open question')}>
              <Text color="textSubtle" as="p">
                {TranslateString(
                  999,
                  'Response to open question goes here. Here is text answering the question which is open. Response to open question goes here. Here is text answering the question which is open.',
                )}
              </Text>
            </FoldableText>
          </CardBody>
        </Card>
      </DetailsWrapper>
    </Flex>
  )
}

export default IfoQuestions
