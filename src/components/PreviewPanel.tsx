import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useThemeStore } from '@/store/themeStore'
import {
  CheckCircle2,
  AlertCircle,
  Info,
  Calendar,
  Users,
  Settings,
  Heart,
  Star,
  Zap,
  ArrowRight,
  Download
} from 'lucide-react'

export function PreviewPanel() {
  const theme = useThemeStore((state) => state.theme)

  return (
    <ScrollArea className="h-full">
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Live Preview</h2>
          <p className="text-muted-foreground">
            See your theme changes in real-time across various components
          </p>
        </div>

        <Tabs defaultValue="components" className="w-full">
          <TabsList>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="colors">Color Palette</TabsTrigger>
          </TabsList>

          <TabsContent value="components" className="space-y-8 mt-8">
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

            {/* Cards */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description goes here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This is the card content area where you can place any content.</p>
                  </CardContent>
                  <CardFooter>
                    <Button>Action</Button>
                  </CardFooter>
                </Card>

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
              </div>
            </section>

            <Separator />

            {/* Form Elements */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Form Elements</h3>
              <div className="max-w-md space-y-4">
                <div className="space-y-2">
                  <Label>Text Input</Label>
                  <Input placeholder="Enter text..." />
                </div>
                <div className="space-y-2">
                  <Label>Disabled Input</Label>
                  <Input placeholder="Disabled" disabled />
                </div>
              </div>
            </section>

            <Separator />

            {/* Alerts */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Alerts & Notifications</h3>
              <div className="space-y-4">
                <Card className="border-green-500/20 bg-green-500/5">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
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

                <Card className="border-blue-500/20 bg-blue-500/5">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-blue-500" />
                      <CardTitle className="text-base">Information</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">This is an informational message.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Stats Cards */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Stats Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Users
                      </CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,543</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Revenue
                      </CardTitle>
                      <Download className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231</div>
                    <p className="text-xs text-muted-foreground">+8.2% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Active Now
                      </CardTitle>
                      <Zap className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">573</div>
                    <p className="text-xs text-muted-foreground">+201 since last hour</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="typography" className="space-y-8 mt-8">
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

          <TabsContent value="colors" className="space-y-8 mt-8">
            <section className="space-y-6">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </Tabs>
      </div>
    </ScrollArea>
  )
}