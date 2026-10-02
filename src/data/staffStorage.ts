
export type StaffRole =
  | "Manager"
  | "Barista"
  | "Kitchen"
  | "Service";

export type StaffMember = {
  id: string;
  name: string;
  phone: string;
  role: StaffRole;
  active: boolean;
};

const STORAGE_KEY = "CaféFlow_staff";

export function getStaff(): StaffMember[] {
  try {
    const storedStaff = localStorage.getItem(STORAGE_KEY);

    if (!storedStaff) {
      return [];
    }

    return JSON.parse(storedStaff) as StaffMember[];
  } catch {
    return [];
  }
}

export function saveStaff(staffMember: StaffMember): void {
  const existingStaff = getStaff();

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([
      ...existingStaff,
      staffMember,
    ])
  );
}

export function deleteStaff(staffId: string): void {
  const staff = getStaff();

  const updatedStaff = staff.filter(
    (member) => member.id !== staffId
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedStaff)
  );
}

export function updateStaffStatus(
  staffId: string,
  active: boolean
): void {
  const staff = getStaff();

  const updatedStaff = staff.map((member) =>
    member.id === staffId
      ? { ...member, active }
      : member
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedStaff)
  );
}

