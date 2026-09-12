import { useEffect, useState } from "react"
import { Link } from "react-router"
import { Button } from "~/components/ui/button"

export default function TopPage() {
	const [message, setMessage] = useState<string | null>(null)
	useEffect(() => {
		fetch(`${window.location.origin}/api/hello-react-router`)
			.then((res) => res.json())
			.then((json) => setMessage(json.message))
	}, [])

	return (
		<div className="min-h-screen flex flex-col justify-center items-center text-center space-y-6">
			<h1 className="text-3xl font-semibold">🎵トップページ🎶</h1>

			<Button
				variant="defaultVSCodeに拡張機能を導入する"
				size="xl"
				className="rounded-2xl w-200"
				asChild
			>
				<Link to="/auth/login">ログインはこちらから</Link>
			</Button>

			<Button variant="default" size="xl" className="rounded-2xl w-200" asChild>
				<Link to="/auth/register">新規登録はこちらから</Link>
			</Button>

			<Button variant="outline" size="xl" className="rounded-2xl w-200" asChild>
				<Link to="/app">ホームへ戻る</Link>
			</Button>
		</div>
	)
}
