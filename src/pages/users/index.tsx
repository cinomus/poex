import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { fetch } from 'src/shared/utils/fetch';

type THomeProps = {
  // ДОбавить тип
  users;
};

const Users: FC<THomeProps> = ({ users = [] }) => {
  console.log('idi nahui mraz', users);
  return (
    <div>
      <h1>Users</h1>
      {users.map(({ email, _id }) => (
        <div>
          <Link href={`/users/${_id}`}>{email}</Link>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
  const { users } = await fetch('/users/getUsers');
  console.log('inex', users);
  return { props: { users } };
};

export default Users;
