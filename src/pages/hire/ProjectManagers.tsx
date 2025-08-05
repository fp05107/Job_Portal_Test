import HirePageLayout from "@/components/HirePageLayout";

const ProjectManagers = () => {
  return (
    <HirePageLayout
      title="Hire Project Managers"
      subtitle="Deliver projects on time with certified and experienced project managers."
    >
      <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
        <li>PMP & Agile Certified Managers</li>
        <li>Remote Team Coordinators</li>
        <li>Timeline and Budget Management</li>
      </ul>
    </HirePageLayout>
  );
};

export default ProjectManagers;