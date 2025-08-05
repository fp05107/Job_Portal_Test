import HirePageLayout from "@/components/HirePageLayout";

const ManagementConsultants = () => {
  return (
    <HirePageLayout
      title="Hire Management Consultants"
      subtitle="Expert business consultants to guide your strategy and operations."
    >
      <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
        <li>Business Strategy Experts</li>
        <li>Growth & Operations Consultants</li>
        <li>Change Management</li>
      </ul>
    </HirePageLayout>
  );
};

export default ManagementConsultants;