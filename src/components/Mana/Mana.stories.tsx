import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Header, Mana } from '../..'

storiesOf('Mana', module).add('Symbol', () => <Mana />)
storiesOf('Mana', module).add('Symbol + MANA', () => <Mana>MANA</Mana>)
storiesOf('Mana', module).add('Total voted', () => (
  <>
    <Header sub>Total voted</Header>
    <Mana size="large">1,235,345</Mana>
  </>
))
storiesOf('Mana', module).add('Black', () => (
  <Mana size="small" black>
    20
  </Mana>
))
storiesOf('Mana', module).add('Sizes', () => (
  <>
    <Mana size="huge">1,000</Mana>
    <Mana size="large">1,000</Mana>
    <Mana size="medium">1,000</Mana>
    <Mana size="small">1,000</Mana>
    <Mana size="tiny">1,000</Mana>
  </>
))
storiesOf('Mana', module).add('In a paragraph', () => (
  <p>
    You have voted with <Mana size="small">1,000</Mana>.
  </p>
))
