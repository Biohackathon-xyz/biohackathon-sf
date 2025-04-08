
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Schedule data for the biohackathon
const scheduleData = {
  day1: [
    { time: '9:00 AM', event: 'Opening Ceremony', description: 'Welcome talk and introduction to the biohackathon' },
    { time: '10:00 AM', event: 'Team Formation', description: 'Form teams and brainstorm project ideas' },
    { time: '12:00 PM', event: 'Lunch Break', description: 'Networking lunch with mentors' },
    { time: '1:00 PM', event: 'Hacking Begins', description: 'Start working on your projects' },
    { time: '3:00 PM', event: 'Workshop: DIY Bio Techniques', description: 'Learn practical laboratory skills' },
    { time: '6:00 PM', event: 'Dinner', description: 'Food and informal presentations of project progress' },
    { time: '7:00 PM', event: 'Evening Hacking', description: 'Continue working on projects' },
  ],
  day2: [
    { time: '9:00 AM', event: 'Morning Check-in', description: 'Progress updates and mentor feedback' },
    { time: '10:00 AM', event: 'Hacking Continues', description: 'Continue project development' },
    { time: '12:00 PM', event: 'Lunch Break', description: 'Networking lunch' },
    { time: '1:00 PM', event: 'Workshop: Bioethics', description: 'Discussion on ethical considerations in biohacking' },
    { time: '3:00 PM', event: 'Project Finalization', description: 'Prepare presentations and demos' },
    { time: '5:00 PM', event: 'Final Presentations', description: 'Teams present their projects' },
    { time: '7:00 PM', event: 'Awards Ceremony', description: 'Recognition of outstanding projects and closing remarks' },
  ]
};

const Schedule: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50" id="schedule">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-smythe text-center mb-8">
          Event Schedule
        </h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Join us for an exciting two-day biohackathon packed with workshops, 
          hacking sessions, and opportunities to collaborate with fellow innovators.
        </p>
        
        <Tabs defaultValue="day1" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="day1" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Day 1
              </TabsTrigger>
              <TabsTrigger value="day2" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Day 2
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="day1">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Day 1 Schedule</CardTitle>
                <CardDescription className="text-center">Friday, June 13, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Time</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead className="hidden md:table-cell">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduleData.day1.map((item, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {item.time}
                        </TableCell>
                        <TableCell className="font-semibold">{item.event}</TableCell>
                        <TableCell className="hidden md:table-cell">{item.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="day2">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Day 2 Schedule</CardTitle>
                <CardDescription className="text-center">Saturday, June 14, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Time</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead className="hidden md:table-cell">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduleData.day2.map((item, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {item.time}
                        </TableCell>
                        <TableCell className="font-semibold">{item.event}</TableCell>
                        <TableCell className="hidden md:table-cell">{item.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Schedule;
