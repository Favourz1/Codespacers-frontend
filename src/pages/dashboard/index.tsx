import Button from "@/components/Button";
import DashboardIcon from "@/assets/icons/dashboard-icon.svg";

export default function Dashboard() {
  return (
    <main>
      <Button variant="filled" icon={<DashboardIcon />}>
        Hello World
      </Button>
    </main>
  );
}
