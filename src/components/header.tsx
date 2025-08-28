import Image from "next/image";

export function Header() {
    return (
        <header className="h-[200px] bg-[#0D0D0D]">
            <div className="flex items-center justify-center h-full px-4 py-2">
                <Image
                    src="/todo-logo.svg"
                    alt="Todo Logo"
                    width={192}
                    height={48}
                />
            </div>
        </header>
    );
}
