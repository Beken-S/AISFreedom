import { User, UserData } from '../models';

function getUserData(user: User): UserData {
  const { id, role, name, email } = user.get({ plain: true });

  return { id, role, name, email };
}

export default getUserData;
