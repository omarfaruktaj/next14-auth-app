import AuthCard from './auth-card'

export default function RegisterForm() {
  return (
    <AuthCard
      showSocial
      headerTitle='Register'
      headerLabel='Welcome to you next auth project'
      backButtonLabel='Already have a account?'
      backButtonHref='/login'
    >
      <div></div>
    </AuthCard>
  )
}
