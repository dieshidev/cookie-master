import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material'
import { GetServerSideProps } from 'next'
import { Layout } from '../components/layouts/Layout'
import React from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

interface Props {
  theme: string
}

const ThemeChangerPage: React.FC<Props> = ({ theme }) => {
  const [currenteTheme, setCurrenteTheme] = React.useState(theme)

  const onThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value

    setCurrenteTheme(selectedTheme)
    Cookies.set('theme', selectedTheme)
  }

  const onClick = async () => {
    const { data } = await axios.get('/api/hello')
    console.log('data: ', data)
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

          <Button onClick={onClick}>Request</Button>
        </CardContent>
      </Card>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { theme = 'light', name = 'No name' } = ctx.req.cookies

  const validThemes = ['light', 'dark', 'custom']

  return {
    props: { theme: validThemes.includes(theme) ? theme : 'dark', name },
  }
}

export default ThemeChangerPage
