import { Icon, Inbox, PlusCircle, UserCircle } from "lucide-react"
import Image from "next/image"

export const MockDiscordUi = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        flex min-h-[800px] w-full max-w-[1200px] text-white bg-discord rounded-lg overflow-hidden"
    >
      {/* Server List */}
      <div className="hidden sm:flex w-[72px] bg-[#202225] py-3 flex-col items-center">
        <div className="size-12 bg-discord_brand_color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200"></div>

        <div className="w-8 h-[12px] bg-discord rounded-full my-2" />

        {
          // Channel List
          [...Array(5)].map((_, i) => (
            <div className="justify-center rounded-3xl mb-3 hover:rounded-xl flex items-center hover:bg-discord_brand_color bg-discord size-12 duration-200 transition-all cursor-not-allowed">
              <span className="text-lg font-semibold text-gray-400">
                {String.fromCharCode(65 + i)}
              </span>
            </div>
          ))
        }

        <div className="group mt-auto justify-center rounded-3xl mb-3 hover:rounded-xl flex items-center hover:bg-[#3ba55c] bg-discord size-12 duration-200 transition-all cursor-not-allowed">
          <span className="text-lg font-semibold text-gray-400">
            <PlusCircle className="text-[#3ba55c] group-hover:text-white" />
          </span>
        </div>
      </div>
      <div className="hidden md:flex w-60 bg-[#2f3136] flex-col">
        <div className="px-4 h-16 border-b border-[#202225] flex items-center shodow-sm">
          <div className="w-full bg-[#2022225] text-sm px-2 h-8 cursor-not-allowed text-gray-500 rounded items-center justify-center">
            Find or start conversation
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pt-4">
          <div className="px-2 mb-2">
            <div
              className="flex items-center text-sm px-2 py-1 5 rounded hover:bg-[#393243] text-[#dcddde]
            cursor-not-allowed"
            >
              <UserCircle className="mr-4 size-8 text-[#b9bbbbe]" />
              <span className="font-medium text-sm">Friends</span>
            </div>
            <div
              className="flex items-center text-sm px-2 py-1 5 rounded hover:bg-[#393243] text-[#dcddde]
            cursor-not-allowed"
            >
              <Inbox className="mr-4 size-8 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Nitro</span>
            </div>
          </div>

          <div className="px-2 mb-4">
            <h3 className="text-xs mb-2 text-[#b9bbbe] font-semibold">
              Direct Messages
            </h3>

            <div className="flex py-1.5 rounded items-center px-2 bg-[#393c43] text-white cursor-pointer">
              <Image
                className="object-cover mr-2 rounded-full"
                src="/brand-asset-profile-picture.png"
                alt="Profile"
                height={32}
                width={32}
              />
              <span className="font-medium">Panda</span>
            </div>

            <div className="my-1 space-y-px">
              {
                // Messages
                [...Array(4)].map((_, i) => (
                  <div className="flex itesm-center px-2 py-1.5 rounded text-gray-600 cursor-not-allowed">
                    <div className="size-8 rounded-full bg-discord mr-3" />
                    <span className="font-medium">User {i + 1}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="p-2 bg-[#292b2f] flex items-center">
          <div className="size-8 rounded-full bg-brand-700 mr-2" />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">You</p>
            <p className="text-xs text-[#b9bbbe] flex items-center">
              {" "}
              @your_account
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
