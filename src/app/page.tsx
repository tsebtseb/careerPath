//import Image from "next/image";
"use client";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

type Salary = {
  year: number;
  level?: string;
  jobTitleWithLevel?: string;
  salary: number | null;
  yearlySalary?: number;
  salarybonus?: number;
  totalsalarybonus?: number;
};

type userSalary={
  year: number;
  salary: number;
  yearlySalary: number;
  salarybonus: number;
  totalsalarybonus: number;

}
interface SalaryData{
  year: number;
  jobSalary: number;
  userSalary: number;
}
export default function Home() {
  const jobData = [
    {
      id: 1,
      job: "Software Developer/Software Engineer(Java)",
      category: "Application Developer",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 60000,
        },
        { level: "Mid", year: [4, 5], min_salary: 60000, max_salary: 75000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 75000,
          max_salary: 100000,
        },
      ],
    },
    {
      id: 2,
      job: "Software Developer/Software Engineer(.NET)",
      category: "Application Developer",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 55000,
        },
        { level: "Mid", year: [4, 5], min_salary: 55000, max_salary: 70000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 70000,
          max_salary: 80000,
        },
      ],
    },
    {
      id: 3,
      job: "Front-End Developer",
      category: "Application Developer",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 60000,
        },
        { level: "Mid", year: [4, 5], min_salary: 60000, max_salary: 80000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 80000,
          max_salary: 100000,
        },
      ],
    },
    {
      id: 4,
      job: "Full Stack Developer",
      category: "Application Developer",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 60000,
        },
        { level: "Mid", year: [4, 5], min_salary: 60000, max_salary: 80000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 80000,
          max_salary: 120000,
        },
      ],
    },
    {
      id: 5,
      job: "Mobile Developer",
      category: "Application Developer",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 60000,
        },
        { level: "Mid", year: [4, 5], min_salary: 60000, max_salary: 75000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 75000,
          max_salary: 100000,
        },
      ],
    },
    {
      id: 6,
      job: "Programmer",
      category: "Application Developer",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 60000,
        },
        { level: "Mid", year: [4, 5], min_salary: 60000, max_salary: 75000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 75000,
          max_salary: 90000,
        },
      ],
    },
    {
      id: 7,
      job: "System Analyst",
      category: "Application Developer",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 65000,
        },
        { level: "Mid", year: [4, 5], min_salary: 65000, max_salary: 80000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 80000,
          max_salary: 95000,
        },
      ],
    },
    {
      id: 8,
      job: "Software Tester/QA Engineer",
      category: "Application Developer",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 25000,
          max_salary: 60000,
        },
        { level: "Mid", year: [4, 5], min_salary: 60000, max_salary: 80000 },
        {
          level: "Senior",
          year: [6, 7, 8],
          min_salary: 80000,
          max_salary: 100000,
        },
        {
          level: "Lead",
          year: [9, 10],
          min_salary: 110000,
          max_salary: 200000,
        },
      ],
    },
    {
      id: 9,
      job: "DevOps Engineer",
      category: "Application Developer",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 60000,
        },
        { level: "Mid", year: [4, 5], min_salary: 60000, max_salary: 120000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9],
          min_salary: 60000,
          max_salary: 120000,
        },
        {
          level: "Lead",
          year: [10],
          min_salary: 120000,
          max_salary: 200000,
        },
      ],
    },
    {
      id: 10,
      job: "Business Analyst",
      category: "Business Analysis",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 60000,
        },
        { level: "Mid", year: [4, 5], min_salary: 60000, max_salary: 80000 },
        {
          level: "Senior",
          year: [6, 7, 8],
          min_salary: 80000,
          max_salary: 100000,
        },
        {
          level: "Lead",
          year: [9, 10],
          min_salary: 90000,
          max_salary: 120000,
        },
      ],
    },
    {
      id: 11,
      job: "Web Designer/Graphic Designer",
      category: "Digital Marketing",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 40000,
        },
        { level: "Mid", year: [4, 5], min_salary: 40000, max_salary: 60000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 60000,
          max_salary: 80000,
        },
      ],
    },
    {
      id: 12,
      job: "BI Developer/Data Modeler",
      category: "Data",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 50000,
        },
        { level: "Mid", year: [4, 5], min_salary: 50000, max_salary: 80000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 80000,
          max_salary: 150000,
        },
      ],
    },
    {
      id: 13,
      job: "Data Engineer/Data Analyst/ Data Scientist",
      category: "Data",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 60000,
        },
        { level: "Mid", year: [4, 5], min_salary: 60000, max_salary: 100000 },
        {
          level: "Senior",
          year: [6, 7, 8],
          min_salary: 80000,
          max_salary: 150000,
        },
        {
          level: "Lead",
          year: [9, 10],
          min_salary: 120000,
          max_salary: 200000,
        },
      ],
    },
    {
      id: 14,
      job: "Consultant (ERP/CRM/BI/DW)",
      category: "Data",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 60000,
        },
        { level: "Mid", year: [4, 5], min_salary: 60000, max_salary: 80000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 80000,
          max_salary: 200000,
        },
      ],
    },
    {
      id: 15,
      job: "System/Software Solution Architect",
      category: "Data",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 60000,
        },
        { level: "Mid", year: [4, 5], min_salary: 60000, max_salary: 80000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9],
          min_salary: 80000,
          max_salary: 150000,
        },
        {
          level: "Lead",
          year: [10],
          min_salary: 150000,
          max_salary: 200000,
        },
      ],
    },
    {
      id: 16,
      job: "IT Support",
      category: "Infrastructure",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 35000,
        },
        {
          level: "Mid",
          year: [4, 5, 6, 7, 8, 9, 10],
          min_salary: 35000,
          max_salary: 60000,
        },
      ],
    },
    {
      id: 17,
      job: "System Engineer",
      category: "Infrastructure",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 55000,
        },
        { level: "Mid", year: [4, 5], min_salary: 55000, max_salary: 80000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 80000,
          max_salary: 100000,
        },
      ],
    },
    {
      id: 18,
      job: "Network Engineer",
      category: "Infrastructure",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 35000,
          max_salary: 50000,
        },
        { level: "Mid", year: [4, 5], min_salary: 50000, max_salary: 70000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 70000,
          max_salary: 100000,
        },
      ],
    },
    {
      id: 19,
      job: "Database Admin(DBA)",
      category: "Infrastructure",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 35000,
          max_salary: 50000,
        },
        { level: "Mid", year: [4, 5], min_salary: 50000, max_salary: 80000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 80000,
          max_salary: 120000,
        },
      ],
    },
    {
      id: 20,
      job: "Presale Technical Consultant",
      category: "Presale",
      children: [
        {
          level: "Junior",
          year: [1, 2, 3],
          min_salary: 30000,
          max_salary: 50000,
        },
        { level: "Mid", year: [4, 5], min_salary: 50000, max_salary: 80000 },
        {
          level: "Senior",
          year: [6, 7, 8, 9, 10],
          min_salary: 80000,
          max_salary: 150000,
        },
      ],
    },
  ];

  const [jobtitle, setJobtitle] = useState<string | null>(null);
  const [salaryType, setSalaryType] = useState<string | null>(null);
  const [percentRaise, setPercentRaise] = useState<number>(0);
  const [bonus, setBonus] = useState<number>(0);
  const [errors, setErrors] = useState<{ jobtitle: string; salary: string }>({
    jobtitle: "",
    salary: "",
  });

  const [usererrors, setuserErrors] = useState<string>("");

  const [user_salary, setUserSalary] = useState<number>(0);
  const [user_percentRaise, setUserPercentRaise] = useState<number>(0);
  const [user_bonus, setUserBonus] = useState<number>(0);

  const [resultisVisible, setresultIsVisible] = useState(false);

  const [compareisVisible, setcompareIsVisible] = useState(false);

  const [salaries, setSalaries] = useState<Salary[]>([]);

  const [usersalaries, setuserSalaries] = useState<userSalary[]>([]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ jobtitle: "", salary: "" });
    const formErrors = { jobtitle: "", salary: "" };
    if (!jobtitle) {
      formErrors.jobtitle = "Job title is required.";
      setresultIsVisible(false);
    }

    if (!salaryType) {
      formErrors.salary = "Salary Range is required.";
      setresultIsVisible(false);
    }

    if (formErrors.jobtitle || formErrors.salary) {
      setErrors(formErrors);
      setresultIsVisible(false);
      return;
    }

    if (!jobtitle || !salaryType) {
      console.error("Job title and Salary Type are required");
      return;
    }

    console.log("Job Title:", jobtitle);
    console.log("Salary:", salaryType);
    console.log("Bonus:", bonus);
    console.log("Percent Raise:", percentRaise);
    const result = calculateSalaries(jobtitle, salaryType, bonus, percentRaise);
    setSalaries(result);
    console.log(result);
    setresultIsVisible(true);
  };

  const compareUserInput = (e: React.FormEvent) => {
    e.preventDefault();
    setuserErrors("");
    if (user_salary <= 0 || isNaN(user_salary)) {
      setuserErrors("Please enter a valid salary.");
      setcompareIsVisible(false);
      return;
    }

    if (isNaN(user_percentRaise) || isNaN(user_bonus)) {
      setuserErrors("Please enter valid values for percent raise and bonus.");
      setcompareIsVisible(false);
      return;
    }

    console.log("User Salary:", user_salary);
    console.log("User Percent Raise:", user_percentRaise);
    console.log("User Bonus:", user_bonus);

    const result = calculateCompareSalaries(
      Number(user_salary),
      Number(user_bonus),
      Number(user_percentRaise)
    );
    setuserSalaries(result);
    console.log(result);
    setcompareIsVisible(true);
  };

  const calculateSalaries = (
    jobtitle: string,
    salaryType: string,
    bonus: number,
    percentRaise: number
  ): Salary[] => {
    const job = jobData.find((j) => j.job === jobtitle);
    if (!job) return [];

    let salary: number | null = null;
    let lastLevel: string | null = null;

    return Array.from({ length: 10 }, (_, index) => {
      const year = index + 1;
      const levelData = job.children.find((child) => child.year.includes(year));

      if (!levelData) return { year, level: "N/A", salary: null };

      let baseSalary;
      switch (salaryType) {
        case "min_salary":
          baseSalary = levelData.min_salary;
          break;
        case "max_salary":
          baseSalary = levelData.max_salary;
          break;
        case "avg_salary":
          baseSalary = (levelData.min_salary + levelData.max_salary) / 2;
          break;
        default:
          baseSalary = null;
      }

      if (salary === null || lastLevel !== levelData.level) {
        //change level
        salary = baseSalary; // Reset to the new level's base salary
      } else {
        //not change level=>raise
        salary += Math.round(salary * (percentRaise / 100)); // Apply percentage raise
      }

      lastLevel = levelData.level; // Update last level for next iteration

      const jobTitleWithLevel = `${jobtitle}_${levelData.level}`;

      const yearlySalary = salary !== null ? salary * 12 : 0;
      const salarybonus = salary !== null ? salary * bonus : 0;
      const totalsalarybonus = salary !== null ? yearlySalary + salarybonus : 0;

      return {
        jobTitleWithLevel,
        year,
        salary,
        yearlySalary: yearlySalary || 0,
        salarybonus: salarybonus || 0,
        totalsalarybonus: totalsalarybonus || 0,
      };
    });
  };

  const calculateCompareSalaries = (
    user_salary: number,
    user_bonus: number,
    user_percentRaise: number
  ) => {
    let salary = user_salary;
    let previousSalary: number | null = null;;

    return Array.from({ length: 10 }, (_, index) => {
      const year = index + 1;

      if (salary !== null) {
        if (previousSalary !== null) {
          salary = Math.round(
            previousSalary + (previousSalary * user_percentRaise) / 100
          );
        }
        previousSalary = salary;
      }

      const yearlySalary = salary * 12;
      const salarybonus = salary * user_bonus;
      const totalsalarybonus = yearlySalary + salarybonus;

      return {
        year,
        salary,
        yearlySalary,
        salarybonus,
        totalsalarybonus,
      };
    });
  };

  

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

  const [chartData, setChartData]=useState<SalaryData[]>([]);

  useEffect(()=> {

    if (!jobtitle || !salaryType || user_salary <= 0) return;

    const jobSalaries=calculateSalaries(jobtitle, salaryType, bonus, percentRaise);
    const userSalaryData=calculateCompareSalaries(user_salary, user_bonus, user_percentRaise);

    if (jobSalaries.length === 0 || userSalaryData.length === 0) return;

    const mergedData: SalaryData[]=jobSalaries.map((salaryData, index)=>({
      year: salaryData.year,
      jobSalary: salaryData.salary || 0,
      userSalary: userSalaryData[index]?.salary||0,
    }));
    setChartData(mergedData);
    console.log("merged Data:", mergedData);
    console.log("Updated Chart Data in State:", chartData);
  },[jobtitle,salaryType,bonus,percentRaise,user_salary,user_bonus,user_percentRaise]);

  return (
    <section className="escape overlay top-0 min-h-screen w-screen bg-cover bg-center bg-no-repeat">
      <Navbar />
      <div className="w-full h-full flex flex-row">
        <div className="flex flex-col w-1/2 h-auto bg-white/5 backdrop-blur-sm border-2 border-white/50 shadow-2xl rounded-lg mx-4 mt-0 mb-4 p-2 items-center">
          <form onSubmit={handleSubmit}>
            <div className="container mt-4 flex mx-4 items-center">
              <h1 className="font-bold mr-5 mt-1">Job Title:</h1>
              <select
                className={`border top-0 p-2 rounded-lg bg-white shadow-lg ${
                  errors.jobtitle ? "border-red-500" : "border-gray-300"
                }`}
                onChange={(e) => setJobtitle(e.target.value)}
              >
                <option value={""}>Select Job Title</option>
                {jobData.map((job) => (
                  <option
                    key={job.id}
                    value={job.job}
                    className="border p-2 rounded-md bg-white"
                  >
                    {job.job}
                  </option>
                ))}
              </select>
              {errors.jobtitle && (
                <p className="text-red-500 text-sm z-100">{errors.jobtitle}</p>
              )}
              <select
                className={`border ml-1 p-2 rounded-lg max-h-10 max-w-auto shadow-lg ${
                  errors.salary ? "border-red-500" : "border-black"
                }`}
                onChange={(e) => setSalaryType(e.target.value)}
              >
                <option value={""}>Select Range</option>
                <option value="avg_salary">Average</option>
                <option value="max_salary">Max</option>
                <option value="min_salary">Min</option>
              </select>
              {errors.salary && (
                <p className="text-red-500 text-sm z-100">{errors.salary}</p>
              )}
            </div>
            <div className="container mt-2 flex bg-white/50 shadow-md backdrop-blur-md border-gray-300 border rounded-lg mx-4 p-4 max-w-5/6 items-center justify-center">
              <div className="flex-col">
                <div className="flex flex-row items-center mx-4 justify-center">
                  <h1 className="mt-1 mr-1">Pay Raise</h1>
                  <input
                    type="number"
                    step="0.1"
                    value={percentRaise}
                    onChange={(e) => setPercentRaise(Number(e.target.value))}
                    required
                    min="0"
                    name="percentRaise"
                    placeholder="3"
                    className="block border top-0 border-gray-300 p-2 rounded-lg bg-white shadow-lg my-2 max-w-15"
                  />
                  <h1 className="mt-1 mx-1">%</h1>
                </div>
                <div className="flex flex-row items-center my-4 justify-center">
                  <h1 className="mt-1 ml-6">Bonus</h1>
                  <input
                    type="number"
                    step="0.1"
                    name="bonus"
                    value={bonus}
                    onChange={(e) => setBonus(Number(e.target.value))}
                    required
                    min="0"
                    placeholder="months"
                    className="block border top-0 border-gray-300 p-2 rounded-lg bg-white shadow-lg mx-2 max-w-20"
                  />
                </div>
                <div className="flex items-center justify-center ">
                  <button
                    type="submit"
                    className="flex p-2 bg-black rounded-lg text-white hover:bg-gray-800"
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          {resultisVisible && (
            <div className="h-[400px] overflow-y-scroll overflow-x-auto">
              <Table className="bg-white mt-2 border-gray-100 border">
                <TableHeader className="bg-[#e3e1e1]">
                  <TableRow>
                    <TableHead className="border border-gray-100 text-black">
                      Job Title
                    </TableHead>
                    <TableHead className="border border-gray-100">
                      Year
                    </TableHead>
                    <TableHead className="border border-gray-100">
                      Salary
                    </TableHead>
                    <TableHead className="border border-gray-100">
                      Yearly Salary
                    </TableHead>
                    <TableHead className="border border-gray-100">
                      Bonus
                    </TableHead>
                    <TableHead className="border border-gray-100">
                      Yearly+Bonus
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salaries.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.jobTitleWithLevel}</TableCell>
                      <TableCell>{row.year}</TableCell>
                      <TableCell>{row.salary}</TableCell>
                      <TableCell>{row.yearlySalary}</TableCell>
                      <TableCell>{row.salarybonus}</TableCell>
                      <TableCell>{row.totalsalarybonus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex flex-row items-center my-4 justify-between">
                <h1 className="mt-1 p-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg border-2 shadow-lg border-gray-300">
                  <b>Total: </b>
                  {salaries.reduce((sum, row) => sum + (row.yearlySalary || 0), 0)}
                </h1>
                <h1 className="mt-1 p-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg border-2 shadow-lg border-gray-300">
                  <b>Total(with bonus): </b>
                  {salaries.reduce((sum, row) => sum + (row.totalsalarybonus || 0), 0)}
                </h1>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col w-1/2 h-auto bg-white/5 backdrop-blur-sm border-2 border-white/50 shadow-2xl rounded-lg mx-4 mt-0 mb-4 p-2 items-center">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Input Salary</CardTitle>
              <CardDescription>
                Please input your salary that you want to compare.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={compareUserInput}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="user_salary">Salary</Label>
                    <Input
                      type="number"
                      value={user_salary}
                      onChange={(e) => setUserSalary(Number(e.target.value))}
                      required
                      min="0"
                      id="user_salary"
                      placeholder="Amount of your salary"
                    />
                  </div>
                  {usererrors && (
                    <p className="text-red-500 text-sm z-100">{usererrors}</p>
                  )}

                  <div className="flex flex-col space-y-1.5 ">
                    <Label htmlFor="user_percentRaise">Percent Raise (%)</Label>
                    <Input
                      type="number"
                      value={user_percentRaise}
                      onChange={(e) => setUserPercentRaise(Number(e.target.value))}
                      required
                      min="0"
                      id="user_salary"
                      placeholder="Percent Increase (%)"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 ">
                    <Label htmlFor="user_bonus">Bonus</Label>
                    <Input
                      type="number"
                      value={user_bonus}
                      onChange={(e) => setUserBonus(Number(e.target.value))}
                      required
                      min="0"
                      id="user_salary"
                      placeholder="Number of months with bonus"
                    />
                  </div>
                </div>
                <CardFooter className="flex justify-center items-center mt-4">
                  <Button type="submit">Compare</Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
          {compareisVisible && (
            <div className="h-[400px] overflow-y-scroll overflow-x-auto">
              <Table className="bg-white mt-2 border-gray-100 border">
                <TableHeader className="bg-[#e3e1e1]">
                  <TableRow>
                    <TableHead className="font-bold border border-gray-100">
                      Year
                    </TableHead>
                    <TableHead className="border border-gray-100">
                      Salary
                    </TableHead>
                    <TableHead className="border border-gray-100">
                      Yearly Salary
                    </TableHead>
                    <TableHead className="border border-gray-100">
                      Bonus
                    </TableHead>
                    <TableHead className="border border-gray-100">
                      Yearly+Bonus
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usersalaries.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.year}</TableCell>
                      <TableCell>{row.salary}</TableCell>
                      <TableCell>{row.yearlySalary}</TableCell>
                      <TableCell>{row.salarybonus}</TableCell>
                      <TableCell>{row.totalsalarybonus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex flex-row items-center my-4 justify-between">
                <h1 className="mt-1 p-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg border-2 shadow-lg border-gray-300">
                  <b>Total: </b>
                  {usersalaries.reduce((sum, row) => sum + (row.yearlySalary || 0), 0)}
                </h1>
                <h1 className="mt-1 p-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg border-2 shadow-lg border-gray-300">
                  <b>Total(with bonus): </b>
                  {usersalaries.reduce((sum, row) => sum + (row.totalsalarybonus || 0), 0)}
                </h1>
              </div>
            </div>
          )}

          <div className="flex flex-row items-center my-4 justify-center">
            <h1 className="mt-1 p-2 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-lg border-2 shadow-lg border-gray-300">
              <b>Different: </b>
              {(
                usersalaries.reduce((sum, row) => sum + (row.yearlySalary || 0), 0) -
                salaries.reduce((sum, row) => sum + (row.yearlySalary || 0), 0)
              ).toLocaleString()}
            </h1>
          </div>

          <Card>
      <CardHeader>
        <CardTitle>Salary Comparison</CardTitle>
        <CardDescription>show comparison of the salary for each year as line chart.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="jobSalary"
              type="monotone"
              stroke="#1976d2"
              strokeWidth={2}
              dot={false}
              connectNulls={true}
            />
            <Line
              dataKey="userSalary"
              type="monotone"
              stroke="#29b6f6"
              strokeWidth={2}
              dot={false}
              connectNulls={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>

        </div>
      </div>
    </section>
  );
}
