import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useThemeStore } from '@/store/themeStore'
import { ChartsPreview } from '@/components/preview/ChartsPreview'
import { AnimationsPreview } from '@/components/preview/AnimationsPreview'
import { DashboardPreview } from '@/components/preview/DashboardPreview'
// import { ArcTimelineDemo } from '@/components/preview/ArcTimelineDemo'
import {
  CheckCircle2,
  AlertCircle,
  Info,
  Users,
  Heart,
  Zap,
  ArrowRight,
  Star,
  Clock,
  Check,
  Package,
  Shield,
  ShoppingCart,
  CreditCard,
  Search,
  DollarSign,
  TrendingUp,
  Activity,
  BarChart3,
  Copy,
  CheckCheck
} from 'lucide-react'

export function PreviewPanel() {
  const theme = useThemeStore((state) => state.theme)
  const [copiedPalette, setCopiedPalette] = React.useState(false)

  const copyColorPalette = () => {
    const palette = Object.entries(theme.colors).map(([key, color]) => {
      return `--${key}: ${color.hsl.h} ${color.hsl.s}% ${color.hsl.l}%;`
    }).join('\n')

    const fullPalette = `:root {\n${palette}\n}`

    navigator.clipboard.writeText(fullPalette).then(() => {
      setCopiedPalette(true)
      setTimeout(() => setCopiedPalette(false), 2000)
    })
  }

  return (
    <ScrollArea className="h-full">
      <div>
        <div className="px-8 pt-8 pb-4">
          <h2 className="text-2xl font-bold mb-2">Live Preview</h2>
          <p className="text-muted-foreground">
            See your theme changes in real-time across various components
          </p>
        </div>

        <Tabs defaultValue="components" className="w-full">
          <TabsList className="w-full flex px-8">
            <TabsTrigger value="components" className="flex-1">Components</TabsTrigger>
            <TabsTrigger value="dashboard" className="flex-1">Dashboard</TabsTrigger>
            <TabsTrigger value="charts" className="flex-1">Charts</TabsTrigger>
            <TabsTrigger value="design" className="flex-1">Design</TabsTrigger>
            <TabsTrigger value="spacing" className="flex-1">Spacing</TabsTrigger>
            <TabsTrigger value="effects" className="flex-1">Effects</TabsTrigger>
            <TabsTrigger value="addons" className="flex-1">Add-Ons</TabsTrigger>
          </TabsList>

          <TabsContent value="components" className="px-8 py-8 space-y-8">
            {/* Buttons */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button disabled>Disabled</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </section>

            <Separator />

            {/* Checkboxes, Toggles, Radios & Badges */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Selection Controls & Badges</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* Checkboxes */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Checkboxes</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" defaultChecked />
                      <span className="text-sm">Checked option</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                      <span className="text-sm">Unchecked option</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" disabled defaultChecked />
                      <span className="text-sm text-muted-foreground">Disabled checked</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" disabled />
                      <span className="text-sm text-muted-foreground">Disabled unchecked</span>
                    </label>
                  </div>
                </div>

                {/* Toggle Switches */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Toggle Switches</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Notifications</span>
                      <button
                        className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors"
                        onClick={(e) => {
                          e.currentTarget.classList.toggle('bg-primary');
                          e.currentTarget.classList.toggle('bg-muted');
                          const circle = e.currentTarget.querySelector('span');
                          circle?.classList.toggle('translate-x-6');
                          circle?.classList.toggle('translate-x-1');
                        }}
                      >
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Dark mode</span>
                      <button
                        className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors"
                        onClick={(e) => {
                          e.currentTarget.classList.toggle('bg-primary');
                          e.currentTarget.classList.toggle('bg-muted');
                          const circle = e.currentTarget.querySelector('span');
                          circle?.classList.toggle('translate-x-6');
                          circle?.classList.toggle('translate-x-1');
                        }}
                      >
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between opacity-50">
                      <span className="text-sm text-muted-foreground">Disabled on</span>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary opacity-50" disabled>
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between opacity-50">
                      <span className="text-sm text-muted-foreground">Disabled off</span>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted opacity-50" disabled>
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Radio Buttons */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Radio Buttons</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="example" className="w-4 h-4 text-primary focus:ring-primary" defaultChecked />
                      <span className="text-sm">Option 1 (selected)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="example" className="w-4 h-4 text-primary focus:ring-primary" />
                      <span className="text-sm">Option 2</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="example" className="w-4 h-4 text-primary focus:ring-primary" />
                      <span className="text-sm">Option 3</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="disabled" className="w-4 h-4 text-primary focus:ring-primary" disabled defaultChecked />
                      <span className="text-sm text-muted-foreground">Disabled selected</span>
                    </label>
                  </div>
                </div>

                {/* Badges */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <div className="flex gap-2">
                      <Badge className="gap-1">
                        <Star className="h-3 w-3" />
                        Featured
                      </Badge>
                      <Badge variant="secondary" className="gap-1">
                        <Clock className="h-3 w-3" />
                        Pending
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Active
                      </Badge>
                      <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        Warning
                      </Badge>
                      <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                        Info
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="rounded-full">99+</Badge>
                      <Badge variant="destructive" className="rounded-full">New</Badge>
                      <Badge variant="secondary" className="rounded-full">
                        <span className="mr-1">●</span> Live
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            {/* Cards */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Cards - Multiple Variants</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {/* Basic Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Card</CardTitle>
                    <CardDescription>Simple card with standard layout</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This is the card content area where you can place any content.</p>
                  </CardContent>
                  <CardFooter>
                    <Button>Action</Button>
                  </CardFooter>
                </Card>

                {/* Interactive Card */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Interactive Card</CardTitle>
                      <Zap className="h-5 w-5 text-accent" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input placeholder="Enter your email" />
                    </div>
                    <div className="flex gap-2">
                      <Badge>New</Badge>
                      <Badge variant="secondary">Popular</Badge>
                      <Badge variant="destructive">Hot</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>
                      Submit <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Feature Card */}
                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Premium Features</CardTitle>
                    <CardDescription>Advanced security & performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">End-to-end encryption</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">99.9% uptime SLA</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">24/7 priority support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Upgrade Now</Button>
                  </CardFooter>
                </Card>

                {/* Hover Effect Card */}
                <Card className="transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <CardTitle>Hover Card</CardTitle>
                    <CardDescription>Interactive hover effects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-md mb-4" />
                    <p className="text-sm">Hover over this card to see the elevation effect.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>

                {/* Gradient Border Card */}
                <Card className="relative bg-gradient-to-r from-primary to-secondary p-[1px]">
                  <div className="bg-background rounded-lg p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle>Gradient Border</CardTitle>
                      <CardDescription>Eye-catching gradient outline</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-medium">4.9 Rating</span>
                        </div>
                        <Badge variant="secondary">Premium</Badge>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Minimal Card */}
                <Card className="border-0 shadow-none bg-muted/50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-muted-foreground" />
                      <CardTitle className="text-base">Minimal Design</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Clean and simple card design with subtle background.</p>
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline">Details</Button>
                      <Button size="sm">Action</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Form Elements */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Form Elements - Extended</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Text Input</Label>
                    <Input placeholder="Enter text..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Email Input</Label>
                    <Input type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Password Input</Label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <Label>Number Input</Label>
                    <Input type="number" placeholder="0" min="0" max="100" />
                  </div>
                  <div className="space-y-2">
                    <Label>Disabled Input</Label>
                    <Input placeholder="Disabled" disabled />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Search Input</Label>
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input className="pl-8" placeholder="Search..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Date Input</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Time Input</Label>
                    <Input type="time" />
                  </div>
                  <div className="space-y-2">
                    <Label>File Input</Label>
                    <Input type="file" />
                  </div>
                  <div className="space-y-2">
                    <Label>Input with Icon</Label>
                    <div className="relative">
                      <Input className="pr-8" placeholder="Amount" />
                      <DollarSign className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>

            </section>

            <Separator />

            {/* Alerts */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Alerts & Notifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Success</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Your changes have been saved successfully.</p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20 bg-destructive/5">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-destructive" />
                      <CardTitle className="text-base">Error</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Something went wrong. Please try again.</p>
                  </CardContent>
                </Card>

                <Card className="border-secondary/20 bg-secondary/5">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-secondary" />
                      <CardTitle className="text-base">Information</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">This is an informational message.</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-accent" />
                      <CardTitle className="text-base">Warning</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Please review before proceeding.</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Update</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">New features are now available.</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <CardTitle className="text-base">Pending</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Action required within 24 hours.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Stats Cards */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Stats Cards with Visual Indicators</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Users
                      </CardTitle>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,543</div>
                    <div className="flex items-center gap-2 text-xs">
                      <TrendingUp className="h-3 w-3 text-primary" />
                      <span className="text-primary">+12%</span>
                      <span className="text-muted-foreground">from last month</span>
                    </div>
                    <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '72%' }} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Revenue
                      </CardTitle>
                      <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <DollarSign className="h-4 w-4 text-accent" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231</div>
                    <div className="flex items-center gap-2 text-xs">
                      <TrendingUp className="h-3 w-3 text-accent" />
                      <span className="text-accent">+8.2%</span>
                      <span className="text-muted-foreground">from last month</span>
                    </div>
                    <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: '85%' }} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Active Now
                      </CardTitle>
                      <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Activity className="h-4 w-4 text-secondary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">573</div>
                    <div className="flex items-center gap-2 text-xs">
                      <Zap className="h-3 w-3 text-secondary" />
                      <span className="text-secondary">+201</span>
                      <span className="text-muted-foreground">since last hour</span>
                    </div>
                    <div className="mt-2 flex gap-0.5">
                      {[100, 80, 120, 90, 110, 130, 573].map((val, i) => (
                        <div key={i} className="flex-1 bg-muted rounded-full overflow-hidden" style={{ height: `${(val / 573) * 20}px` }}>
                          <div className="h-full bg-secondary" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Conversion Rate
                      </CardTitle>
                      <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-accent" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3.24%</div>
                    <div className="flex items-center gap-2 text-xs">
                      <TrendingUp className="h-3 w-3 text-primary" />
                      <span className="text-primary">+0.5%</span>
                      <span className="text-muted-foreground">improvement</span>
                    </div>
                    <div className="mt-2 relative h-8 w-8">
                      <svg className="w-full h-full -rotate-90">
                        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="3" fill="none" className="text-secondary" />
                        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="3" fill="none"
                          className="text-accent"
                          strokeDasharray={`${3.24 * 75.4 / 100} 75.4`} />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[8px] font-bold">3.2</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Server Uptime
                      </CardTitle>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="flex items-center gap-2 text-xs">
                      <Check className="h-3 w-3 text-primary" />
                      <span className="text-primary">Operational</span>
                      <span className="text-muted-foreground">30d</span>
                    </div>
                    <div className="mt-2 grid grid-cols-10 gap-0.5">
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full ${i === 15 ? 'bg-destructive' : 'bg-primary'}`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Performance Score
                      </CardTitle>
                      <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-secondary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">92/100</div>
                    <div className="flex items-center gap-2 text-xs">
                      <TrendingUp className="h-3 w-3 text-primary" />
                      <span className="text-primary">+5 points</span>
                      <span className="text-muted-foreground">this week</span>
                    </div>
                    <div className="mt-2 flex gap-1">
                      <div className="flex-1">
                        <div className="text-[8px] text-muted-foreground mb-0.5">Speed</div>
                        <div className="h-1 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '95%' }} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-[8px] text-muted-foreground mb-0.5">SEO</div>
                        <div className="h-1 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full" style={{ width: '88%' }} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-[8px] text-muted-foreground mb-0.5">A11y</div>
                        <div className="h-1 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '93%' }} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Progress Status with Steps and Checklist */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Progress & Tasks</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Progress Status */}
                <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Overall Progress</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }} />
                    </div>

                    <div className="mt-6 space-y-4">
                      {/* Step 1 - Completed */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <Check className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">Project Setup</p>
                          <p className="text-xs text-muted-foreground">Completed on March 15, 2024</p>
                        </div>
                      </div>

                      {/* Step 2 - Current */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-xs text-primary-foreground font-bold">2</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">Development Phase</p>
                          <p className="text-xs text-muted-foreground">In progress - 75% complete</p>
                          <div className="mt-2 w-full bg-muted rounded-full h-1.5">
                            <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }} />
                          </div>
                        </div>
                      </div>

                      {/* Step 3 - Pending */}
                      <div className="flex items-start gap-3 opacity-50">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-xs text-muted-foreground font-bold">3</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">Testing & QA</p>
                          <p className="text-xs text-muted-foreground">Pending</p>
                        </div>
                      </div>

                      {/* Step 4 - Pending */}
                      <div className="flex items-start gap-3 opacity-50">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-xs text-muted-foreground font-bold">4</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">Deployment</p>
                          <p className="text-xs text-muted-foreground">Pending</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Checklist */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Task Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                      <span className="text-sm line-through text-muted-foreground">Complete project documentation</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                      <span className="text-sm line-through text-muted-foreground">Review code changes</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                      <span className="text-sm line-through text-muted-foreground">Write unit tests</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm">Deploy to production</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm">Send notification to team</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm">Update documentation</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm">Schedule review meeting</span>
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

            <Separator />

            {/* Product Pricing Card */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Product Card with Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-secondary to-secondary/50 relative">
                    <Badge className="absolute top-2 right-2">-25%</Badge>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Package className="h-24 w-24 text-muted-foreground/30" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Premium Package</h4>
                      <p className="text-sm text-muted-foreground">Professional toolkit for developers</p>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-muted-foreground">(4.5)</span>
                      </div>
                      <div className="flex items-baseline gap-2 pt-2">
                        <span className="text-2xl font-bold">$49</span>
                        <span className="text-sm text-muted-foreground line-through">$65</span>
                        <span className="text-sm text-green-500">Save $16</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 gap-2">
                    <Button className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-primary">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 relative">
                    <Badge className="absolute top-2 left-2 bg-primary">Popular</Badge>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="h-24 w-24 text-primary/30" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Enterprise Suite</h4>
                      <p className="text-sm text-muted-foreground">Complete solution for large teams</p>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm text-muted-foreground">(5.0)</span>
                      </div>
                      <div className="flex items-baseline gap-2 pt-2">
                        <span className="text-2xl font-bold">$199</span>
                        <Badge variant="secondary">Best Value</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 gap-2">
                    <Button className="flex-1">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Buy Now
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 relative">
                    <Badge variant="outline" className="absolute top-2 right-2">New</Badge>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="h-24 w-24 text-accent/30" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Starter Pack</h4>
                      <p className="text-sm text-muted-foreground">Perfect for individual developers</p>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">(4.0)</span>
                      </div>
                      <div className="flex items-baseline gap-2 pt-2">
                        <span className="text-2xl font-bold">$19</span>
                        <span className="text-sm text-muted-foreground">/month</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 gap-2">
                    <Button variant="outline" className="flex-1">
                      Start Free Trial
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </section>

          </TabsContent>

          <TabsContent value="dashboard" className="px-8 py-8">
            <DashboardPreview />
          </TabsContent>

          <TabsContent value="design" className="px-8 py-8">
            <Tabs defaultValue="colors" className="w-full">
              <TabsList className="mb-6 grid grid-cols-4 w-full">
                <TabsTrigger value="colors">Colors</TabsTrigger>
                <TabsTrigger value="typography">Typography</TabsTrigger>
                <TabsTrigger value="radius">Radius</TabsTrigger>
                <TabsTrigger value="shadows">Shadows</TabsTrigger>
              </TabsList>

              <TabsContent value="colors" className="space-y-8">
                <section className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Color Palette</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyColorPalette}
                      className="gap-2"
                    >
                      {copiedPalette ? (
                        <>
                          <CheckCheck className="h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy Palette
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Object.entries(theme.colors).map(([key, color]) => (
                      <div key={key} className="space-y-2">
                        <div
                          className="h-24 rounded-lg border"
                          style={{ backgroundColor: color.value }}
                        />
                        <div>
                          <p className="font-medium capitalize">{key}</p>
                          <p className="text-xs text-muted-foreground font-mono">
                            {color.value}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            HSL: {color.hsl.h}, {color.hsl.s}%, {color.hsl.l}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Color Combinations</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                      <Card className="bg-primary text-primary-foreground">
                        <CardHeader>
                          <CardTitle>Primary on Background</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>This shows how primary color looks on the default background.</p>
                        </CardContent>
                      </Card>

                      <Card className="bg-secondary text-secondary-foreground">
                        <CardHeader>
                          <CardTitle>Secondary on Background</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>This shows how secondary color looks on the default background.</p>
                        </CardContent>
                      </Card>

                      <Card className="bg-accent text-accent-foreground">
                        <CardHeader>
                          <CardTitle>Accent on Background</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>This shows how accent color looks on the default background.</p>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted text-muted-foreground">
                        <CardHeader>
                          <CardTitle>Muted on Background</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>This shows how muted color looks on the default background.</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>
              </TabsContent>

              <TabsContent value="typography" className="space-y-8">
                <section className="space-y-6">
                  <div style={{ fontFamily: theme.typography.fontFamily }}>
                    <h1 className="text-5xl font-bold mb-4">Heading 1</h1>
                    <h2 className="text-4xl font-bold mb-4">Heading 2</h2>
                    <h3 className="text-3xl font-bold mb-4">Heading 3</h3>
                    <h4 className="text-2xl font-bold mb-4">Heading 4</h4>
                    <h5 className="text-xl font-bold mb-4">Heading 5</h5>
                    <h6 className="text-lg font-bold mb-4">Heading 6</h6>

                    <Separator className="my-8" />

                    <div className="space-y-4">
                      <p className="text-base leading-relaxed">
                        This is a paragraph with regular text. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        This is small muted text that can be used for descriptions or secondary content.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        This is extra small text for captions or metadata.
                      </p>
                    </div>

                    <Separator className="my-8" />

                    <div className="space-y-4">
                      <div className="font-bold">Bold Text (700)</div>
                      <div className="font-semibold">Semibold Text (600)</div>
                      <div className="font-medium">Medium Text (500)</div>
                      <div className="font-normal">Normal Text (400)</div>
                      <div className="font-light">Light Text (300)</div>
                    </div>
                  </div>
                </section>
              </TabsContent>

              <TabsContent value="radius" className="space-y-8">
                <section className="space-y-6">
                  <h3 className="text-lg font-semibold">Border Radius</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(theme.effects.borderRadius).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <div
                          className="h-24 bg-primary flex items-center justify-center text-primary-foreground text-sm"
                          style={{ borderRadius: value }}
                        >
                          {key}
                        </div>
                        <p className="text-xs text-center text-muted-foreground font-mono">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Combined Examples */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Applied to Components</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                      <Card style={{ borderRadius: theme.effects.borderRadius.sm }}>
                        <CardHeader>
                          <CardTitle className="text-base">Small Radius Card</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">This card uses small border radius.</p>
                        </CardContent>
                      </Card>

                      <Card style={{ borderRadius: theme.effects.borderRadius.lg }}>
                        <CardHeader>
                          <CardTitle className="text-base">Large Radius Card</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">This card uses large border radius.</p>
                        </CardContent>
                      </Card>

                      <Card style={{ borderRadius: theme.effects.borderRadius['2xl'] }}>
                        <CardHeader>
                          <CardTitle className="text-base">2XL Radius Card</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">This card uses 2XL border radius.</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button style={{ borderRadius: theme.effects.borderRadius.sm }}>Small Radius</Button>
                      <Button style={{ borderRadius: theme.effects.borderRadius.md }}>Medium Radius</Button>
                      <Button style={{ borderRadius: theme.effects.borderRadius.lg }}>Large Radius</Button>
                      <Button style={{ borderRadius: theme.effects.borderRadius.full }}>Full Radius</Button>
                    </div>
                  </div>
                </section>
              </TabsContent>

              <TabsContent value="shadows" className="space-y-8">
                <section className="space-y-6">
                  <h3 className="text-lg font-semibold">Shadows</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(theme.effects.shadows).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <div
                          className="h-32 bg-card rounded-lg flex items-center justify-center"
                          style={{ boxShadow: value }}
                        >
                          <span className="text-sm font-medium">Shadow {key}</span>
                        </div>
                        <p className="text-xs text-muted-foreground font-mono text-center">
                          {key}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Combined Effects */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Shadow + Radius Combinations</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                      <Card
                        style={{
                          borderRadius: theme.effects.borderRadius.lg,
                          boxShadow: theme.effects.shadows.md
                        }}
                      >
                        <CardHeader>
                          <CardTitle className="text-base">Medium Shadow + Large Radius</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">This card combines medium shadow with large border radius.</p>
                        </CardContent>
                      </Card>

                      <Card
                        style={{
                          borderRadius: theme.effects.borderRadius.xl,
                          boxShadow: theme.effects.shadows.lg
                        }}
                      >
                        <CardHeader>
                          <CardTitle className="text-base">Large Shadow + XL Radius</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">This card combines large shadow with extra large border radius.</p>
                        </CardContent>
                      </Card>

                      <Card
                        style={{
                          borderRadius: theme.effects.borderRadius['2xl'],
                          boxShadow: theme.effects.shadows.xl
                        }}
                      >
                        <CardHeader>
                          <CardTitle className="text-base">XL Shadow + 2XL Radius</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">This card combines extra large shadow with 2XL border radius.</p>
                        </CardContent>
                      </Card>

                      <Card
                        style={{
                          borderRadius: theme.effects.borderRadius.sm,
                          boxShadow: theme.effects.shadows.inner
                        }}
                      >
                        <CardHeader>
                          <CardTitle className="text-base">Inner Shadow + Small Radius</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">This card uses inner shadow with small border radius.</p>
                        </CardContent>
                      </Card>

                      <Card
                        className="hover:shadow-2xl transition-shadow duration-300"
                        style={{
                          borderRadius: theme.effects.borderRadius.lg,
                          boxShadow: theme.effects.shadows.sm
                        }}
                      >
                        <CardHeader>
                          <CardTitle className="text-base">Hover Shadow Effect</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">Hover over this card to see shadow transition.</p>
                        </CardContent>
                      </Card>

                      <Card
                        style={{
                          borderRadius: theme.effects.borderRadius['3xl'],
                          boxShadow: theme.effects.shadows['2xl']
                        }}
                      >
                        <CardHeader>
                          <CardTitle className="text-base">2XL Shadow + 3XL Radius</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">Maximum shadow with smooth rounded corners.</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="spacing" className="px-8 py-8 space-y-8">
            <section className="space-y-6">
              <h3 className="text-lg font-semibold">Spacing System</h3>

              {/* Spacing Scale */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Base unit: {theme.spacing.base}px</p>
                <div className="space-y-3">
                  {Object.entries(theme.spacing.scale).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4">
                      <span className="w-12 text-sm font-mono">{key}</span>
                      <div
                        className="bg-primary h-8 rounded"
                        style={{ width: `${value * theme.spacing.base * 4}px` }}
                      />
                      <span className="text-sm text-muted-foreground">
                        {(value * theme.spacing.base).toFixed(1)}px
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Padding Examples */}
              <div className="space-y-4">
                <h4 className="font-medium">Padding Examples</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted" style={{ padding: `${theme.spacing.scale.sm * theme.spacing.base}px` }}>
                      <div className="bg-background rounded p-2 text-center">Small Padding</div>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted" style={{ padding: `${theme.spacing.scale.md * theme.spacing.base}px` }}>
                      <div className="bg-background rounded p-2 text-center">Medium Padding</div>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted" style={{ padding: `${theme.spacing.scale.lg * theme.spacing.base}px` }}>
                      <div className="bg-background rounded p-2 text-center">Large Padding</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Gap Examples */}
              <div className="space-y-4">
                <h4 className="font-medium">Gap Examples</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Small gap</p>
                    <div className="flex" style={{ gap: `${theme.spacing.scale.sm * theme.spacing.base}px` }}>
                      <div className="bg-primary text-primary-foreground rounded p-4 flex-1 text-center">Item 1</div>
                      <div className="bg-primary text-primary-foreground rounded p-4 flex-1 text-center">Item 2</div>
                      <div className="bg-primary text-primary-foreground rounded p-4 flex-1 text-center">Item 3</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Medium gap</p>
                    <div className="flex" style={{ gap: `${theme.spacing.scale.md * theme.spacing.base}px` }}>
                      <div className="bg-secondary text-secondary-foreground rounded p-4 flex-1 text-center">Item 1</div>
                      <div className="bg-secondary text-secondary-foreground rounded p-4 flex-1 text-center">Item 2</div>
                      <div className="bg-secondary text-secondary-foreground rounded p-4 flex-1 text-center">Item 3</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Large gap</p>
                    <div className="flex" style={{ gap: `${theme.spacing.scale.lg * theme.spacing.base}px` }}>
                      <div className="bg-accent text-accent-foreground rounded p-4 flex-1 text-center">Item 1</div>
                      <div className="bg-accent text-accent-foreground rounded p-4 flex-1 text-center">Item 2</div>
                      <div className="bg-accent text-accent-foreground rounded p-4 flex-1 text-center">Item 3</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="effects" className="px-8 py-8">
            <AnimationsPreview />
          </TabsContent>


          {/* Charts Tab */}
          <TabsContent value="charts" className="px-8 py-8">
            <ChartsPreview />
          </TabsContent>

          {/* Add-Ons Tab */}
          <TabsContent value="addons" className="px-8 py-8 space-y-8">

            {/* Custom Plugins */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Custom Plugins</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Animation Library
                    </CardTitle>
                    <CardDescription>
                      Add smooth transitions and micro-interactions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Fade animations</span>
                        <Badge variant="secondary">Installed</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Slide transitions</span>
                        <Badge variant="secondary">Installed</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Scale effects</span>
                        <Badge variant="outline">Available</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Configure</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Accessibility Tools
                    </CardTitle>
                    <CardDescription>
                      Ensure your theme meets WCAG standards
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Contrast checker</span>
                        <Badge>Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Focus indicators</span>
                        <Badge>Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Screen reader hints</span>
                        <Badge variant="secondary">Ready</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Run Audit</Button>
                  </CardFooter>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Extensions */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Theme Extensions</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Zap className="h-8 w-8 text-primary" />
                      <Badge variant="secondary">Popular</Badge>
                    </div>
                    <CardTitle>Gradient Generator</CardTitle>
                    <CardDescription>
                      Create beautiful gradients with your theme colors
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button size="sm" className="w-full">
                      Install Extension
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <BarChart3 className="h-8 w-8 text-primary" />
                      <Badge>New</Badge>
                    </div>
                    <CardTitle>Data Viz Pack</CardTitle>
                    <CardDescription>
                      Advanced chart themes and data visualization tools
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button size="sm" className="w-full">
                      Install Extension
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Activity className="h-8 w-8 text-primary" />
                      <Badge variant="outline">Beta</Badge>
                    </div>
                    <CardTitle>Motion Presets</CardTitle>
                    <CardDescription>
                      Pre-built animation sequences for common interactions
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button size="sm" variant="secondary" className="w-full">
                      Try Beta
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Integrations */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Integrations</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Export Destinations</CardTitle>
                    <CardDescription>
                      Connect your theme to external tools and services
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-lg font-bold">F</span>
                          </div>
                          <div>
                            <p className="font-medium">Figma</p>
                            <p className="text-sm text-muted-foreground">Design tokens sync</p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">Connect</Button>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-lg font-bold">S</span>
                          </div>
                          <div>
                            <p className="font-medium">Storybook</p>
                            <p className="text-sm text-muted-foreground">Component library</p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">Connect</Button>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-lg font-bold">G</span>
                          </div>
                          <div>
                            <p className="font-medium">GitHub</p>
                            <p className="text-sm text-muted-foreground">Version control</p>
                          </div>
                        </div>
                        <Button size="sm">Connected</Button>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-lg font-bold">V</span>
                          </div>
                          <div>
                            <p className="font-medium">VS Code</p>
                            <p className="text-sm text-muted-foreground">Editor themes</p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">Connect</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Premium Features */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Premium Features</h3>
              <Card className="border-primary/50 bg-primary/5">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Upgrade to Pro</CardTitle>
                    <Badge className="bg-gradient-to-r from-primary to-purple-600">PRO</Badge>
                  </div>
                  <CardDescription>
                    Unlock advanced features and unlimited exports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Unlimited theme exports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Advanced color algorithms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Team collaboration tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Priority support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Custom brand presets</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-primary to-purple-600">
                    Upgrade Now - $9/month
                  </Button>
                </CardFooter>
              </Card>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  )
}