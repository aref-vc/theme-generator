import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Users,
  DollarSign,
  Activity,
  BarChart3,
  ShoppingCart,
  Settings,
  Bell,
  Search,
  Menu,
  User,
  Home,
  FileText,
  PieChart,
  Layers,
  LogOut,
  ArrowUp,
  ArrowDown,
  Clock,
  Calendar,
  Mail,
  Download,
  Upload,
  Filter,
  MoreVertical,
  Zap,
  Server,
  Shield,
  CheckCircle,
  AlertCircle,
  XCircle,
  Target,
  Award,
  MessageSquare,
  RefreshCw,
  Edit,
  Trash2,
  Plus,
  Send,
  Archive,
  Package2,
  CreditCard,
  TrendingUp,
  Eye,
  Save,
  UserPlus,
  Phone,
  Video,
  Paperclip
} from 'lucide-react'

export function DashboardPreview() {
  const [activeSection, setActiveSection] = useState('dashboard')

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold mb-1">$52,420</p>
                <div className="flex items-center gap-1 text-sm">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500">12.5%</span>
                  <span className="text-muted-foreground">vs last month</span>
                </div>
              </Card>
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold mb-1">8,549</p>
                <div className="flex items-center gap-1 text-sm">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500">23%</span>
                  <span className="text-muted-foreground">growth</span>
                </div>
              </Card>
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Sales</p>
                  <ShoppingCart className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold mb-1">1,429</p>
                <div className="flex items-center gap-1 text-sm">
                  <ArrowDown className="h-4 w-4 text-red-500" />
                  <span className="text-red-500">4.3%</span>
                  <span className="text-muted-foreground">decrease</span>
                </div>
              </Card>
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Performance</p>
                  <Activity className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold mb-1">98.3%</p>
                <div className="flex items-center gap-1 text-sm">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span className="text-muted-foreground">Excellent</span>
                </div>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <Card className="col-span-2 p-6">
                <CardHeader className="px-0 pt-0 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle>Revenue Overview</CardTitle>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                  <CardDescription>Monthly revenue for the current year</CardDescription>
                </CardHeader>
                <div className="h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-20 w-20 text-muted-foreground/20" />
                </div>
              </Card>

              <Card className="p-6">
                <CardHeader className="px-0 pt-0 pb-4">
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest system events</CardDescription>
                </CardHeader>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New user registered</p>
                      <p className="text-sm text-muted-foreground">john.doe@example.com joined</p>
                      <p className="text-xs text-muted-foreground">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Order #1234 completed</p>
                      <p className="text-sm text-muted-foreground">Amount: $299.99</p>
                      <p className="text-xs text-muted-foreground">15 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Server backup started</p>
                      <p className="text-sm text-muted-foreground">Scheduled maintenance</p>
                      <p className="text-xs text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New comment on blog</p>
                      <p className="text-sm text-muted-foreground">5 pending moderation</p>
                      <p className="text-xs text-muted-foreground">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Additional Dashboard Sections */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0 pb-4">
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Frequently used operations</CardDescription>
                </CardHeader>
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Users className="h-6 w-6" />
                    <span className="text-xs">Add User</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <FileText className="h-6 w-6" />
                    <span className="text-xs">New Post</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Upload className="h-6 w-6" />
                    <span className="text-xs">Upload</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Mail className="h-6 w-6" />
                    <span className="text-xs">Send Email</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Settings className="h-6 w-6" />
                    <span className="text-xs">Settings</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Download className="h-6 w-6" />
                    <span className="text-xs">Export</span>
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <CardHeader className="px-0 pt-0 pb-4">
                  <CardTitle>System Status</CardTitle>
                  <CardDescription>Current system health</CardDescription>
                </CardHeader>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>CPU Usage</span>
                      <span className="font-medium">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Memory</span>
                      <span className="font-medium">4.2 GB / 8 GB</span>
                    </div>
                    <Progress value={52} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Storage</span>
                      <span className="font-medium">256 GB / 512 GB</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Network</span>
                      <span className="font-medium text-green-500">Stable</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                </div>
              </Card>
            </div>
          </>
        )

      case 'users':
        return (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold">Users Management</h3>
                <p className="text-sm text-muted-foreground">Manage and monitor user accounts</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>
            </div>

            {/* User Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold">1,284</p>
                <p className="text-xs text-green-500">+28 this week</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Active Now</p>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold">423</p>
                <p className="text-xs text-muted-foreground">Real-time</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">New Today</p>
                  <UserPlus className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-blue-500">3 pending approval</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Admins</p>
                  <Shield className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-muted-foreground">2 super admins</p>
              </Card>
            </div>

            {/* Users Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>A complete list of all registered users</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-medium">User</th>
                      <th className="text-left p-4 font-medium">Email</th>
                      <th className="text-left p-4 font-medium">Role</th>
                      <th className="text-left p-4 font-medium">Joined</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-muted/20">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-sm text-primary-foreground">JD</span>
                          </div>
                          <div>
                            <p className="font-medium">John Doe</p>
                            <p className="text-sm text-muted-foreground">Product Manager</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">john.doe@example.com</td>
                      <td className="p-4">
                        <Badge variant="outline">Admin</Badge>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">Jan 15, 2024</td>
                      <td className="p-4">
                        <Badge variant="outline" className="text-green-500">Active</Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/20">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                            <span className="text-sm text-secondary-foreground">JS</span>
                          </div>
                          <div>
                            <p className="font-medium">Jane Smith</p>
                            <p className="text-sm text-muted-foreground">Content Editor</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">jane.smith@example.com</td>
                      <td className="p-4">
                        <Badge variant="outline">Editor</Badge>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">Feb 20, 2024</td>
                      <td className="p-4">
                        <Badge variant="outline" className="text-green-500">Active</Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/20">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                            <span className="text-sm text-accent-foreground">BJ</span>
                          </div>
                          <div>
                            <p className="font-medium">Bob Johnson</p>
                            <p className="text-sm text-muted-foreground">Developer</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">bob.j@example.com</td>
                      <td className="p-4">
                        <Badge variant="outline">User</Badge>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">Mar 10, 2024</td>
                      <td className="p-4">
                        <Badge variant="outline" className="text-yellow-500">Pending</Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/20">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center">
                            <span className="text-sm text-destructive-foreground">AW</span>
                          </div>
                          <div>
                            <p className="font-medium">Alice Wilson</p>
                            <p className="text-sm text-muted-foreground">Designer</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">alice.w@example.com</td>
                      <td className="p-4">
                        <Badge variant="outline">User</Badge>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">Mar 15, 2024</td>
                      <td className="p-4">
                        <Badge variant="outline" className="text-red-500">Inactive</Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </>
        )

      case 'content':
        return (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold">Content Management</h3>
                <p className="text-sm text-muted-foreground">Create, manage, and publish your content</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Import
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Post
                </Button>
              </div>
            </div>

            {/* Content Stats */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline" className="text-xs">Total</Badge>
                </div>
                <p className="text-2xl font-bold">234</p>
                <p className="text-xs text-muted-foreground">Articles</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline" className="text-xs text-green-500">Published</Badge>
                </div>
                <p className="text-2xl font-bold">186</p>
                <p className="text-xs text-green-500">+8 this week</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Edit className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline" className="text-xs text-yellow-500">Draft</Badge>
                </div>
                <p className="text-2xl font-bold">32</p>
                <p className="text-xs text-muted-foreground">In progress</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline" className="text-xs text-blue-500">Scheduled</Badge>
                </div>
                <p className="text-2xl font-bold">16</p>
                <p className="text-xs text-muted-foreground">Upcoming</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline" className="text-xs">Views</Badge>
                </div>
                <p className="text-2xl font-bold">45.2K</p>
                <p className="text-xs text-green-500">+15% growth</p>
              </Card>
            </div>

            {/* Content Grid */}
            <Card>
              <CardHeader>
                <CardTitle>All Content</CardTitle>
                <CardDescription>Manage your articles, pages, and media</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-auto max-h-[500px]">
                  <table className="w-full">
                    <thead className="bg-muted/50 sticky top-0">
                      <tr>
                        <th className="text-left p-4 font-medium">Title</th>
                        <th className="text-left p-4 font-medium">Category</th>
                        <th className="text-left p-4 font-medium">Author</th>
                        <th className="text-left p-4 font-medium">Status</th>
                        <th className="text-left p-4 font-medium">Published</th>
                        <th className="text-left p-4 font-medium">Views</th>
                        <th className="text-left p-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        { title: 'Getting Started with Our Platform', category: 'Tutorial', author: 'John Doe', status: 'published', date: 'Jan 15, 2024', views: '12,543' },
                        { title: 'Product Update v2.0 Announcement', category: 'News', author: 'Jane Smith', status: 'draft', date: '-', views: '-' },
                        { title: 'API Documentation Overview', category: 'Docs', author: 'Mike Chen', status: 'published', date: 'Jan 10, 2024', views: '8,321' },
                        { title: 'Security Best Practices Guide', category: 'Tutorial', author: 'Sarah Wilson', status: 'scheduled', date: 'Jan 20, 2024', views: '-' },
                        { title: 'Customer Success Stories', category: 'Case Study', author: 'Alice Brown', status: 'published', date: 'Jan 8, 2024', views: '5,678' },
                        { title: 'Year in Review 2023', category: 'News', author: 'Bob Johnson', status: 'published', date: 'Dec 31, 2023', views: '23,456' },
                      ].map((item, index) => (
                        <tr key={index} className="hover:bg-muted/20">
                          <td className="p-4">
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-sm text-muted-foreground">Last edited 2 hours ago</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge variant="outline">{item.category}</Badge>
                          </td>
                          <td className="p-4 text-sm">{item.author}</td>
                          <td className="p-4">
                            <Badge
                              variant="outline"
                              className={
                                item.status === 'published'
                                  ? 'text-green-500'
                                  : item.status === 'draft'
                                  ? 'text-yellow-500'
                                  : 'text-blue-500'
                              }
                            >
                              {item.status}
                            </Badge>
                          </td>
                          <td className="p-4 text-sm text-muted-foreground">{item.date}</td>
                          <td className="p-4 text-sm font-medium">{item.views}</td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </>
        )

      case 'analytics':
        return (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold">Analytics Overview</h3>
                <p className="text-sm text-muted-foreground">Monitor your website performance and user behavior</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Last 30 Days
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Page Views</p>
                  <PieChart className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-3xl font-bold mb-1">245.2K</p>
                <div className="flex items-center gap-1">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">12.5%</span>
                  <span className="text-sm text-muted-foreground">vs last month</span>
                </div>
              </Card>
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Unique Visitors</p>
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-3xl font-bold mb-1">62.5K</p>
                <div className="flex items-center gap-1">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">8.3%</span>
                  <span className="text-sm text-muted-foreground">growth</span>
                </div>
              </Card>
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Bounce Rate</p>
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-3xl font-bold mb-1">32.8%</p>
                <div className="flex items-center gap-1">
                  <ArrowDown className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">3.2%</span>
                  <span className="text-sm text-muted-foreground">improved</span>
                </div>
              </Card>
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Avg. Duration</p>
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-3xl font-bold mb-1">4:32</p>
                <div className="flex items-center gap-1">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">+45s</span>
                  <span className="text-sm text-muted-foreground">increase</span>
                </div>
              </Card>
            </div>

            {/* Analytics Charts */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0 pb-4">
                  <CardTitle>Traffic Overview</CardTitle>
                  <CardDescription>Daily visitor trends for the past 30 days</CardDescription>
                </CardHeader>
                <div className="h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-20 w-20 text-muted-foreground/20" />
                </div>
              </Card>

              <Card className="p-6">
                <CardHeader className="px-0 pt-0 pb-4">
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Where your visitors come from</CardDescription>
                </CardHeader>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-sm">Direct</span>
                      </div>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-secondary" />
                        <span className="text-sm">Search</span>
                      </div>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-accent" />
                        <span className="text-sm">Social</span>
                      </div>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-destructive" />
                        <span className="text-sm">Referral</span>
                      </div>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Top Pages */}
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>Most visited pages on your website</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-medium">Page</th>
                      <th className="text-left p-4 font-medium">Views</th>
                      <th className="text-left p-4 font-medium">Unique</th>
                      <th className="text-left p-4 font-medium">Avg. Time</th>
                      <th className="text-left p-4 font-medium">Bounce</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-muted/20">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">/dashboard</p>
                          <p className="text-sm text-muted-foreground">Main dashboard page</p>
                        </div>
                      </td>
                      <td className="p-4 font-medium">45,231</td>
                      <td className="p-4">38,456</td>
                      <td className="p-4">3:45</td>
                      <td className="p-4">28.3%</td>
                    </tr>
                    <tr className="hover:bg-muted/20">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">/products</p>
                          <p className="text-sm text-muted-foreground">Product catalog</p>
                        </div>
                      </td>
                      <td className="p-4 font-medium">32,456</td>
                      <td className="p-4">28,901</td>
                      <td className="p-4">2:30</td>
                      <td className="p-4">35.7%</td>
                    </tr>
                    <tr className="hover:bg-muted/20">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">/blog</p>
                          <p className="text-sm text-muted-foreground">Blog homepage</p>
                        </div>
                      </td>
                      <td className="p-4 font-medium">28,789</td>
                      <td className="p-4">24,567</td>
                      <td className="p-4">5:12</td>
                      <td className="p-4">22.1%</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </>
        )

      case 'ecommerce':
        return (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold">E-commerce Dashboard</h3>
                <p className="text-sm text-muted-foreground">Monitor sales, products, and customer activity</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </div>
            </div>

            {/* E-commerce Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Total Sales</p>
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-3xl font-bold mb-1">$524,632</p>
                <div className="flex items-center gap-1">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">15.3%</span>
                  <span className="text-sm text-muted-foreground">vs last month</span>
                </div>
              </Card>
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Orders</p>
                  <Package2 className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-3xl font-bold mb-1">3,456</p>
                <div className="flex items-center gap-1">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">+89</span>
                  <span className="text-sm text-muted-foreground">today</span>
                </div>
              </Card>
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Avg. Order</p>
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-3xl font-bold mb-1">$152.42</p>
                <div className="flex items-center gap-1">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">$7.20</span>
                  <span className="text-sm text-muted-foreground">increase</span>
                </div>
              </Card>
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Conversion</p>
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-3xl font-bold mb-1">3.42%</p>
                <div className="flex items-center gap-1">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">0.5%</span>
                  <span className="text-sm text-muted-foreground">improved</span>
                </div>
              </Card>
            </div>

            {/* Products and Orders */}
            <div className="grid grid-cols-2 gap-6">
              {/* Top Products */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>Best selling items this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Wireless Headphones Pro', sales: 234, revenue: '$23,400', trend: '+15%' },
                      { name: 'Smart Watch Ultra', sales: 189, revenue: '$18,900', trend: '+12%' },
                      { name: 'Laptop Stand Adjustable', sales: 156, revenue: '$4,680', trend: '+8%' },
                      { name: 'USB-C Hub Premium', sales: 134, revenue: '$5,360', trend: '+5%' },
                    ].map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                            <Package2 className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.sales} units sold</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{product.revenue}</p>
                          <p className="text-sm text-green-500">{product.trend}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Latest customer orders</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-3 text-sm font-medium">Order</th>
                        <th className="text-left p-3 text-sm font-medium">Customer</th>
                        <th className="text-left p-3 text-sm font-medium">Total</th>
                        <th className="text-left p-3 text-sm font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        { id: '#3456', customer: 'Sarah Wilson', total: '$299.99', status: 'completed' },
                        { id: '#3457', customer: 'Mike Chen', total: '$149.50', status: 'processing' },
                        { id: '#3458', customer: 'Emma Davis', total: '$89.99', status: 'pending' },
                        { id: '#3459', customer: 'John Lee', total: '$567.00', status: 'shipped' },
                      ].map((order) => (
                        <tr key={order.id} className="hover:bg-muted/20">
                          <td className="p-3 font-mono text-sm">{order.id}</td>
                          <td className="p-3 text-sm">{order.customer}</td>
                          <td className="p-3 text-sm font-medium">{order.total}</td>
                          <td className="p-3">
                            <Badge
                              variant="outline"
                              className={
                                order.status === 'completed'
                                  ? 'text-green-500'
                                  : order.status === 'processing'
                                  ? 'text-blue-500'
                                  : order.status === 'shipped'
                                  ? 'text-purple-500'
                                  : 'text-yellow-500'
                              }
                            >
                              {order.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </>
        )

      case 'messages':
        return (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold">Messages</h3>
                <p className="text-sm text-muted-foreground">Chat with team members and customers</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Archive className="h-4 w-4 mr-2" />
                  Archive
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Compose
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 h-[800px]">
              {/* Conversations List */}
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Conversations</CardTitle>
                    <Badge variant="outline">24 unread</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-auto max-h-[700px]">
                    {[
                      { name: 'John Smith', avatar: 'J', message: 'Hey, can you review the latest proposal?', time: '2 min ago', unread: true, status: 'online' },
                      { name: 'Alice Brown', avatar: 'A', message: 'Project update: We\'ve completed the first phase', time: '1 hour ago', unread: true, status: 'online' },
                      { name: 'Team Updates', avatar: 'T', message: 'Weekly standup notes are ready', time: '3 hours ago', unread: false, status: 'group' },
                      { name: 'Sarah Wilson', avatar: 'S', message: 'Thanks for the quick response!', time: '5 hours ago', unread: false, status: 'offline' },
                      { name: 'Mike Chen', avatar: 'M', message: 'Can we schedule a call tomorrow?', time: 'Yesterday', unread: false, status: 'busy' },
                      { name: 'Support Team', avatar: 'ST', message: 'Ticket #234 has been resolved', time: '2 days ago', unread: false, status: 'group' },
                    ].map((conv, index) => (
                      <div
                        key={index}
                        className={`p-4 hover:bg-muted/50 cursor-pointer border-b ${
                          index === 0 ? 'bg-primary/10' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              index === 0 ? 'bg-primary text-primary-foreground' :
                              index === 1 ? 'bg-secondary text-secondary-foreground' :
                              'bg-accent text-accent-foreground'
                            }`}>
                              <span className="text-sm font-medium">{conv.avatar}</span>
                            </div>
                            {conv.status === 'online' && (
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                            )}
                            {conv.status === 'busy' && (
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 rounded-full border-2 border-background" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-1">
                              <p className="font-medium truncate">{conv.name}</p>
                              {conv.unread && (
                                <Badge variant="destructive" className="text-xs">New</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{conv.message}</p>
                            <p className="text-xs text-muted-foreground mt-1">{conv.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Chat Window */}
              <Card className="col-span-2 flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-sm text-primary-foreground font-medium">J</span>
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                      </div>
                      <div>
                        <p className="font-medium">John Smith</p>
                        <p className="text-sm text-muted-foreground">Active now</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-4 overflow-auto">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                        <span className="text-xs text-primary-foreground">J</span>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="bg-muted rounded-lg p-3 inline-block">
                          <p className="text-sm">Hey there! I wanted to discuss the latest proposal with you.</p>
                          <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                        </div>
                        <div className="bg-muted rounded-lg p-3 inline-block">
                          <p className="text-sm">Can you review sections 3 and 4? I think we need to adjust the timeline.</p>
                          <p className="text-xs text-muted-foreground mt-1">10:31 AM</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <div className="flex-1 space-y-2 text-right">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 inline-block text-left">
                          <p className="text-sm">Sure! I'll take a look at it now.</p>
                          <p className="text-xs opacity-75 mt-1">10:32 AM</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center">
                        <User className="h-4 w-4 text-secondary-foreground" />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                        <span className="text-xs text-primary-foreground">J</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-muted rounded-lg p-3 inline-block">
                          <p className="text-sm">Perfect! Let me know if you have any questions.</p>
                          <p className="text-xs text-muted-foreground mt-1">10:33 AM</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center py-2">
                      <span className="text-xs text-muted-foreground bg-background px-2">Today</span>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <div className="flex-1 space-y-2 text-right">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 inline-block text-left">
                          <p className="text-sm">I've reviewed the sections. The timeline looks ambitious but achievable.</p>
                          <p className="text-xs opacity-75 mt-1">2:15 PM</p>
                        </div>
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 inline-block text-left">
                          <p className="text-sm">Should we add a buffer for the testing phase?</p>
                          <p className="text-xs opacity-75 mt-1">2:16 PM</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center">
                        <User className="h-4 w-4 text-secondary-foreground" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Input placeholder="Type a message..." className="flex-1" />
                    <Button>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </>
        )

      case 'settings':
        return (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold">Settings</h3>
                <p className="text-sm text-muted-foreground">Manage your application preferences and configuration</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* General Settings */}
              <Card className="p-6">
                <CardHeader className="px-0 pt-0 pb-4">
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Basic configuration options</CardDescription>
                </CardHeader>
                <div className="space-y-4">
                  <div>
                    <Label>Site Name</Label>
                    <Input defaultValue="My Dashboard" className="mt-1" />
                  </div>
                  <div>
                    <Label>Site Description</Label>
                    <Textarea
                      defaultValue="A powerful admin dashboard for managing your business"
                      className="min-h-[100px] resize-none mt-1"
                    />
                  </div>
                  <div>
                    <Label>Contact Email</Label>
                    <Input defaultValue="admin@example.com" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label>Default Language</Label>
                    <select className="w-full border rounded-md px-3 py-2 mt-1">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  <div>
                    <Label>Timezone</Label>
                    <select className="w-full border rounded-md px-3 py-2 mt-1">
                      <option>UTC</option>
                      <option>EST</option>
                      <option>PST</option>
                      <option>GMT</option>
                    </select>
                  </div>
                </div>
              </Card>

              {/* Security Settings */}
              <Card className="p-6">
                <CardHeader className="px-0 pt-0 pb-4">
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Protect your account and data</CardDescription>
                </CardHeader>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                    <Button variant="outline">Enable</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">Session Timeout</p>
                      <p className="text-sm text-muted-foreground">Auto logout after inactivity</p>
                    </div>
                    <select className="border rounded px-3 py-1">
                      <option>30 min</option>
                      <option>1 hour</option>
                      <option>2 hours</option>
                      <option>Never</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">API Keys</p>
                      <p className="text-sm text-muted-foreground">Manage API access</p>
                    </div>
                    <Button variant="outline">Manage</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">Login History</p>
                      <p className="text-sm text-muted-foreground">View recent logins</p>
                    </div>
                    <Button variant="outline">View</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">Password Policy</p>
                      <p className="text-sm text-muted-foreground">Set requirements</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>
              </Card>

              {/* Notification Settings */}
              <Card className="p-6">
                <CardHeader className="px-0 pt-0 pb-4">
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Choose what you want to be notified about</CardDescription>
                </CardHeader>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive updates via email</p>
                      </div>
                    </div>
                    <input type="checkbox" className="h-4 w-4" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-sm text-muted-foreground">Browser push alerts</p>
                      </div>
                    </div>
                    <input type="checkbox" className="h-4 w-4" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">SMS Notifications</p>
                        <p className="text-sm text-muted-foreground">Text message alerts</p>
                      </div>
                    </div>
                    <input type="checkbox" className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Activity Digest</p>
                        <p className="text-sm text-muted-foreground">Weekly summary</p>
                      </div>
                    </div>
                    <input type="checkbox" className="h-4 w-4" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Security Alerts</p>
                        <p className="text-sm text-muted-foreground">Important security updates</p>
                      </div>
                    </div>
                    <input type="checkbox" className="h-4 w-4" defaultChecked />
                  </div>
                </div>
              </Card>
            </div>
          </>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      {/* Interactive Admin Dashboard */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Admin Dashboard</h3>
        <Card className="overflow-hidden">
          <div className="flex h-[1000px]">
            {/* Sidebar */}
            <div className="w-56 bg-card border-r flex flex-col">
              <div className="p-3 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <Layers className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Admin Panel</p>
                    <p className="text-xs text-muted-foreground">v3.0.0</p>
                  </div>
                </div>
              </div>
              <nav className="p-3 space-y-1 flex-1">
                <button
                  onClick={() => setActiveSection('dashboard')}
                  className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                    activeSection === 'dashboard'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setActiveSection('users')}
                  className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                    activeSection === 'users'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <Users className="h-4 w-4" />
                  <span>Users</span>
                  <Badge className="ml-auto" variant="secondary">12</Badge>
                </button>
                <button
                  onClick={() => setActiveSection('content')}
                  className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                    activeSection === 'content'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  <span>Content</span>
                </button>
                <button
                  onClick={() => setActiveSection('analytics')}
                  className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                    activeSection === 'analytics'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <PieChart className="h-4 w-4" />
                  <span>Analytics</span>
                </button>
                <button
                  onClick={() => setActiveSection('ecommerce')}
                  className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                    activeSection === 'ecommerce'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>E-commerce</span>
                </button>
                <button
                  onClick={() => setActiveSection('messages')}
                  className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                    activeSection === 'messages'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <Mail className="h-4 w-4" />
                  <span>Messages</span>
                  <Badge className="ml-auto" variant="destructive">5</Badge>
                </button>
                <button
                  onClick={() => setActiveSection('settings')}
                  className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                    activeSection === 'settings'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </button>
              </nav>
              <div className="p-3 border-t">
                <button className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-destructive/10 hover:text-destructive transition-colors text-sm">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <header className="h-12 border-b px-4 flex items-center justify-between bg-background">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <Menu className="h-4 w-4" />
                  </Button>
                  <div className="relative">
                    <Search className="absolute left-2 top-1.5 h-3 w-3 text-muted-foreground" />
                    <Input className="pl-7 h-7 w-48 text-xs" placeholder="Search..." />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="relative h-7 w-7 p-0">
                    <Bell className="h-4 w-4" />
                    <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-destructive rounded-full" />
                  </Button>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                      <User className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-medium">Admin</span>
                  </div>
                </div>
              </header>

              {/* Dynamic Content Area */}
              <div className="flex-1 p-4 bg-muted/30">
                {renderContent()}
              </div>
            </div>
          </div>
        </Card>
      </section>

      <Separator />

      {/* Metrics Dashboard */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Server Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Server className="h-4 w-4" />
                Server Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">CPU Usage</span>
                <span className="text-sm font-medium">68%</span>
              </div>
              <Progress value={68} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Memory</span>
                <span className="text-sm font-medium">4.2 GB / 8 GB</span>
              </div>
              <Progress value={52} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Storage</span>
                <span className="text-sm font-medium">256 GB / 512 GB</span>
              </div>
              <Progress value={50} />
            </CardContent>
          </Card>

          {/* System Health */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Shield className="h-4 w-4" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  Database
                </span>
                <Badge variant="outline" className="text-green-500">Healthy</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  API
                </span>
                <Badge variant="outline" className="text-green-500">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm flex items-center gap-2">
                  <AlertCircle className="h-3 w-3 text-yellow-500" />
                  Cache
                </span>
                <Badge variant="outline" className="text-yellow-500">Warning</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm flex items-center gap-2">
                  <XCircle className="h-3 w-3 text-red-500" />
                  CDN
                </span>
                <Badge variant="outline" className="text-red-500">Error</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Response Time</span>
                  <span className="text-sm font-medium text-green-500">124ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Uptime</span>
                  <span className="text-sm font-medium">99.98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Error Rate</span>
                  <span className="text-sm font-medium text-red-500">0.02%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Throughput</span>
                  <span className="text-sm font-medium">1.2K req/s</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Compact Dashboard */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Compact Dashboard Layout</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Mini Stats */}
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Goals</p>
                <p className="text-xl font-bold">12/15</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Award className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Achievements</p>
                <p className="text-xl font-bold">89</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <MessageSquare className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Messages</p>
                <p className="text-xl font-bold">24</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <Clock className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Pending</p>
                <p className="text-xl font-bold">7</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Data Table Dashboard */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Data Table View</h3>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>A list of recent transactions and their status</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 text-sm font-medium">Transaction ID</th>
                    <th className="text-left p-3 text-sm font-medium">Customer</th>
                    <th className="text-left p-3 text-sm font-medium">Amount</th>
                    <th className="text-left p-3 text-sm font-medium">Status</th>
                    <th className="text-left p-3 text-sm font-medium">Date</th>
                    <th className="text-left p-3 text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-3 text-sm font-mono">#12345</td>
                    <td className="p-3 text-sm">John Doe</td>
                    <td className="p-3 text-sm font-medium">$299.99</td>
                    <td className="p-3">
                      <Badge variant="outline" className="text-green-500">Completed</Badge>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">2024-01-15</td>
                    <td className="p-3">
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-3 text-sm font-mono">#12346</td>
                    <td className="p-3 text-sm">Jane Smith</td>
                    <td className="p-3 text-sm font-medium">$149.50</td>
                    <td className="p-3">
                      <Badge variant="outline" className="text-yellow-500">Processing</Badge>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">2024-01-14</td>
                    <td className="p-3">
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-3 text-sm font-mono">#12347</td>
                    <td className="p-3 text-sm">Bob Johnson</td>
                    <td className="p-3 text-sm font-medium">$599.00</td>
                    <td className="p-3">
                      <Badge variant="outline" className="text-blue-500">Shipped</Badge>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">2024-01-13</td>
                    <td className="p-3">
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-3 text-sm font-mono">#12348</td>
                    <td className="p-3 text-sm">Alice Brown</td>
                    <td className="p-3 text-sm font-medium">$89.99</td>
                    <td className="p-3">
                      <Badge variant="outline" className="text-red-500">Cancelled</Badge>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">2024-01-12</td>
                    <td className="p-3">
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}