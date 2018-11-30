import Cokkies from 'universal-cookie'

export default ({ req, route, redirect }) => {
  console.log(route.path)
  if (['/'].includes(route.path)) {
    return
  }
  const cokkies = req ? new Cookies(req.header.cookie) : new Cookies()
  const credential = cookies.get('credential') // 証明書

  if (credential && route.path === '/login') {
    return redirect('/')
  }
  if (!credential && route.path !== '/login') {
    return redirect('/login')
  }
}
