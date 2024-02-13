import { Card, CardHeader, CardContent, CardTitle, CardFooter } from '@/components/ui/card'
import AuthHeader from './auth-header'
import BackButton from './back-button'
import Social from './social'

interface Props {
  headerTitle: string
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial: boolean
  children: React.ReactNode
}

export default function AuthCard({
  headerTitle,
  headerLabel,
  children,
  showSocial,
  backButtonHref,
  backButtonLabel,
}: Props) {
  return (
    <Card className=' w-full  shadow-md sm:w-[400px]'>
      <CardHeader>
        <AuthHeader
          title={headerTitle}
          label={headerLabel}
        />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          href={backButtonHref}
          label={backButtonLabel}
        />
      </CardFooter>
    </Card>
  )
}
