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
import {
  CheckCircle2,
  AlertCircle,
  Info,
  Users,
  Heart,
  Zap,
  ArrowRight,
  Download,
  BarChart3
} from 'lucide-react'

export function PreviewPanel() {
  const theme = useThemeStore((state) => state.theme)

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
            <TabsTrigger value="charts" className="flex-1">Charts</TabsTrigger>
            <TabsTrigger value="typography" className="flex-1">Typography</TabsTrigger>
            <TabsTrigger value="spacing" className="flex-1">Spacing</TabsTrigger>
            <TabsTrigger value="effects" className="flex-1">Effects</TabsTrigger>
            <TabsTrigger value="colors" className="flex-1">Colors</TabsTrigger>
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

            {/* Cards */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Cards</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
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

          <TabsContent value="typography" className="px-8 py-8 space-y-8">
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

          <TabsContent value="effects" className="px-8 py-8 space-y-8">
            <section className="space-y-6">
              {/* Border Radius */}
              <div className="space-y-4">
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
              </div>

              <Separator />

              {/* Shadows */}
              <div className="space-y-4">
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
              </div>

              <Separator />

              {/* Combined Effects */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Combined Effects</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  <Card
                    style={{
                      borderRadius: theme.effects.borderRadius.lg,
                      boxShadow: theme.effects.shadows.md
                    }}
                  >
                    <CardHeader>
                      <CardTitle>Medium Shadow + Large Radius</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This card combines medium shadow with large border radius.</p>
                    </CardContent>
                  </Card>

                  <Card
                    style={{
                      borderRadius: theme.effects.borderRadius.xl,
                      boxShadow: theme.effects.shadows.lg
                    }}
                  >
                    <CardHeader>
                      <CardTitle>Large Shadow + XL Radius</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This card combines large shadow with extra large border radius.</p>
                    </CardContent>
                  </Card>

                  <Card
                    style={{
                      borderRadius: theme.effects.borderRadius['2xl'],
                      boxShadow: theme.effects.shadows.xl
                    }}
                  >
                    <CardHeader>
                      <CardTitle>XL Shadow + 2XL Radius</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This card combines extra large shadow with 2XL border radius.</p>
                    </CardContent>
                  </Card>

                  <Card
                    style={{
                      borderRadius: theme.effects.borderRadius.sm,
                      boxShadow: theme.effects.shadows.inner
                    }}
                  >
                    <CardHeader>
                      <CardTitle>Inner Shadow + Small Radius</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This card uses inner shadow with small border radius.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="colors" className="px-8 py-8 space-y-8">
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

          {/* Charts Tab */}
          <TabsContent value="charts" className="px-8 py-8">
            <ChartsPreview />
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  )
}