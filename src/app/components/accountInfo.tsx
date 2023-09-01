import Image from 'next/image';

interface Props {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

export default function AccountInfo({ user }: Props) {
  return (
    <div className="mb-8 flex justify-center items-center gap-x-4 w-full max-w-lg px-4 md:px-0">
      {user?.image ? (
        <Image
          width={50}
          height={50}
          src={user?.image}
          alt="profile picture"
          className="rounded-full"
        />
      ) : null}
      <h3>
        Hello <span className="font-bold">{user?.name}</span>, welcome to your
        app!
      </h3>
    </div>
  );
}
