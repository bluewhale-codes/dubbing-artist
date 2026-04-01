import { Button } from "../../../components/ui/Button"
import { Spinner } from "../../../components/ui/spinner"

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black/50 flex flex-col gap-4 items-center justify-center z-50">
      <Button disabled size="sm">
        <Spinner data-icon="inline-start" />
        Loading...
      </Button>
    </div>
  )
}
