import StaffNavbar from "../components/StaffNavbar";
import { useEffect, useState } from "react";
import { Users, Phone, UserPlus, UserX } from "lucide-react";

import {
  getStaff,
  saveStaff,
  deleteStaff,
  updateStaffStatus,
  type StaffMember,
  type StaffRole,
} from "../data/staffStorage";

const roles: StaffRole[] = [
  "Manager",
  "Barista",
  "Kitchen",
  "Service",
];

function StaffManagement() {
  const [staff, setStaff] = useState<StaffMember[]>([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<StaffRole>("Barista");

  const loadStaff = () => {
    setStaff(getStaff());
  };

  useEffect(() => {
    loadStaff();
  }, []);

  const handleAddStaff = () => {
    if (!name.trim() || !phone.trim()) {
      return;
    }

    const newStaff: StaffMember = {
      id: `ST-${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      role,
      active: true,
    };

    saveStaff(newStaff);

    setName("");
    setPhone("");
    setRole("Barista");

    loadStaff();
  };

  const handleToggleStatus = (
    staffId: string,
    active: boolean
  ) => {
    updateStaffStatus(staffId, !active);
    loadStaff();
  };

  const handleDeleteStaff = (staffId: string) => {
    deleteStaff(staffId);
    loadStaff();
  };

  const activeStaff = staff.filter(
    (member) => member.active
  ).length;

  const inactiveStaff = staff.filter(
    (member) => !member.active
  ).length;

  return (
    <>
    <StaffNavbar />
    <main className="min-h-screen bg-[#F6F1E8] text-[#3D392F]">
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">

        {/* Header */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#71856A]">
            CaféFlow · Staff
          </p>

          <h1 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">
            Staff Management
          </h1>

          <p className="mt-4 max-w-2xl text-[#6A655B]">
            Add, manage and update CaféFlow staff members.
          </p>
        </div>

        {/* Summary */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCE8D7]">
              <Users
                size={22}
                className="text-[#53664D]"
              />
            </div>

            <p className="mt-6 text-sm text-[#817A6E]">
              Total staff
            </p>

            <p className="mt-1 font-serif text-5xl">
              {staff.length}
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-7">
            <p className="text-sm text-[#817A6E]">
              Active staff
            </p>

            <p className="mt-2 font-serif text-5xl text-[#53664D]">
              {activeStaff}
            </p>

            <p className="mt-3 text-sm text-[#6A655B]">
              Currently working
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-7">
            <p className="text-sm text-[#817A6E]">
              Inactive staff
            </p>

            <p className="mt-2 font-serif text-5xl">
              {inactiveStaff}
            </p>

            <p className="mt-3 text-sm text-[#6A655B]">
              Not currently active
            </p>
          </div>

        </div>

        {/* Add Staff */}
        <section className="mt-10 rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-7">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DCE8D7]">
              <UserPlus
                size={20}
                className="text-[#53664D]"
              />
            </div>

            <div>
              <h2 className="font-serif text-2xl">
                Add staff member
              </h2>

              <p className="mt-1 text-sm text-[#817A6E]">
                Add a new member to the CaféFlow team.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-4">

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-[#6A655B]">
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                placeholder="Staff name"
                className="mt-2 w-full rounded-xl border border-[#D8D0C1] bg-[#F6F1E8] px-4 py-3 outline-none transition focus:border-[#8FA487]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-[#6A655B]">
                Phone
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value)
                }
                placeholder="Phone number"
                className="mt-2 w-full rounded-xl border border-[#D8D0C1] bg-[#F6F1E8] px-4 py-3 outline-none transition focus:border-[#8FA487]"
              />
            </div>

            {/* Role */}
            <div>
              <label className="text-sm font-medium text-[#6A655B]">
                Role
              </label>

              <select
                value={role}
                onChange={(event) =>
                  setRole(event.target.value as StaffRole)
                }
                className="mt-2 w-full rounded-xl border border-[#D8D0C1] bg-[#F6F1E8] px-4 py-3 outline-none focus:border-[#8FA487]"
              >
                {roles.map((staffRole) => (
                  <option
                    key={staffRole}
                    value={staffRole}
                  >
                    {staffRole}
                  </option>
                ))}
              </select>
            </div>

            {/* Add button */}
            <div className="flex items-end">
              <button
                type="button"
                onClick={handleAddStaff}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#53664D] px-5 py-3 font-semibold text-white transition hover:bg-[#42533D]"
              >
                <UserPlus size={18} />
                Add Staff
              </button>
            </div>

          </div>
        </section>

        {/* Staff List */}
        <section className="mt-10">

          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#71856A]">
                Team
              </p>

              <h2 className="mt-2 font-serif text-3xl">
                Staff members
              </h2>
            </div>
          </div>

          {staff.length === 0 ? (
            <div className="mt-6 rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-12 text-center">

              <Users
                size={36}
                className="mx-auto text-[#71856A]"
              />

              <h3 className="mt-5 font-serif text-2xl">
                No staff members yet
              </h3>

              <p className="mt-2 text-[#6A655B]">
                Add your first staff member above.
              </p>

            </div>
          ) : (
            <div className="mt-6 space-y-4">

              {staff.map((member) => (
                <article
                  key={member.id}
                  className="rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-6"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    {/* Staff information */}
                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8E4DA]">
                        <Users
                          size={21}
                          className="text-[#71856A]"
                        />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">

                          <h3 className="font-serif text-2xl">
                            {member.name}
                          </h3>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              member.active
                                ? "bg-[#DCE8D7] text-[#53664D]"
                                : "bg-[#E7E1D8] text-[#756E62]"
                            }`}
                          >
                            {member.active
                              ? "Active"
                              : "Inactive"}
                          </span>

                        </div>

                        <p className="mt-1 text-sm text-[#53664D]">
                          {member.role}
                        </p>

                        <p className="mt-2 flex items-center gap-2 text-sm text-[#817A6E]">
                          <Phone size={14} />
                          {member.phone}
                        </p>

                        <p className="mt-1 text-xs text-[#A09A8F]">
                          Staff ID: {member.id}
                        </p>
                      </div>

                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">

                      <button
                        type="button"
                        onClick={() =>
                          handleToggleStatus(
                            member.id,
                            member.active
                          )
                        }
                        className="rounded-full border border-[#D8D0C1] px-5 py-2.5 text-sm font-semibold text-[#5E5A51] transition hover:bg-[#F0EBE2]"
                      >
                        {member.active
                          ? "Deactivate"
                          : "Activate"}
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteStaff(member.id)
                        }
                        className="flex items-center gap-2 rounded-full border border-[#D8D0C1] px-5 py-2.5 text-sm font-semibold text-[#756E62] transition hover:bg-[#F0EBE2]"
                      >
                        <UserX size={16} />
                        Remove
                      </button>

                    </div>

                  </div>
                </article>
              ))}

            </div>
          )}

        </section>

      </section>
    </main>
    </>
  );
}

export default StaffManagement;



