import { Flex, Img, Text } from '@chakra-ui/react'
import web3 from 'web3'
import { usePendingRewards } from '../../hooks'

const roundTo = (value: number, decimals: number) =>
  Math.floor(value * 10 ** decimals) / 10 ** decimals

const formatNumber = (value: any, decimals: number) =>
  isNaN(Number(value))
    ? '...'
    : `${roundTo(Number(value) / 10 ** 18, decimals)}`

export const PendingRewards = (props: { owner: any }) => {
  const { owner } = props

  const pendingRewards = usePendingRewards(owner)

  if (!web3.utils.isAddress(owner)) return null

  return (
    <Flex
      direction="row"
      justifyContent={['space-evenly', 'space-evenly', 'left']}
      alignItems="end"
      h="28px"
    >
      {/* <Img
        h="28px"
        w="28px"
        mr="10px"
        my="auto"
        display={['none', 'none', 'block']}
        src="/cfti.png"
      /> */}
      <Text mb="6px" mr="4px" display={['none', 'none', 'inline']}>
        +{' '}
      </Text>
      <Text mb="6px">{formatNumber(pendingRewards, 3)}</Text>
    </Flex>
  )
}
