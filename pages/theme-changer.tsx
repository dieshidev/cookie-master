import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { GetServerSideProps } from 'next'
import { Layout } from '../components/layouts/Layout'
import React from 'react'
import Cookies from 'js-cookie'

const ThemeChangerPage: React.FC = props => {
  console.log({ props })

  const [currenteTheme, setCurrenteTheme] = React.useState('light')

  const onThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value

    setCurrenteTheme(selectedTheme)
    Cookies.set('theme', selectedTheme)
  }

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup value={currenteTheme} onChange={onThemeChange}>
              <FormControlLabel value='light' control={<Radio />} label='Light' />
              <FormControlLabel value='dark' control={<Radio />} label='Dark' />
              <FormControlLabel value='custom' control={<Radio />} label='Custom' />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { theme = 'light', name = 'No name' } = ctx.req.cookies

  return {
    props: { theme, name },
  }
}

export default ThemeChangerPage
