"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function DataSource() {
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

  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
  const toggleRow = (id: string) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="escape overlay top-0 min-h-screen w-screen bg-cover bg-center bg-no-repeat">
      <Navbar />
      <div className="overflow-y-scroll overflow-x-auto mx-8 flex flex-col items-center justify-center">
        <div className="container my-2 flex bg-white/50 shadow-md backdrop-blur-md border-gray-300 border rounded-lg mx-4 p-4 items-center justify-center">
          <Link href="https://www.ismtech.net/th/it-salary-report/">
            <div className="flex-col items-center text-center">
              <h1 className="font-bold text-xl"> Data Table</h1>
              <p>
                According to the report on the salaries of people in the IT
                industry in 2567
              </p>
            </div>
          </Link>
        </div>
        <Table className="bg-white mt-2 border-gray-100 border max-h-auto m-2 mb-8">
          <TableHeader className="bg-[#e3e1e1]">
            <TableRow>
              <TableHead className="border border-gray-100 text-black">
                Job Title
              </TableHead>
              <TableHead className="border border-gray-100">Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobData.map((job) => (
              <>
                {/* Parent Row */}
                <TableRow key={job.job}>
                  <TableCell
                    onClick={() => toggleRow(job.job)}
                    className="flex cursor-pointer"
                  >
                    {expandedRows[job.job] ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                    {job.job}
                  </TableCell>
                  <TableCell>{job.category}</TableCell>
                </TableRow>

                {/* Render Child Header if Expanded */}
                {expandedRows[job.job] && (
                  <>
                    <TableRow className="bg-gray-200 font-semibold">
                      <TableHead className="border border-gray-300 pl-10">
                        Level
                      </TableHead>
                      <TableHead className="border border-gray-300">
                        Years of Experience
                      </TableHead>
                      <TableHead className="border border-gray-300">
                        Salary (Baht)
                      </TableHead>
                    </TableRow>

                    {/* Child Rows (Experience Levels) */}
                    {job.children.map((child, index) => (
                      <TableRow
                        key={`${job.id}-${index}`}
                        className="bg-gray-100"
                      >
                        <TableCell className="pl-10">{child.level}</TableCell>
                        <TableCell>
                          {" "}
                          {child.year[0]} - {child.year[child.year.length - 1]}{" "}
                          years
                        </TableCell>
                        <TableCell>
                          {child.min_salary} - {child.max_salary} THB
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
