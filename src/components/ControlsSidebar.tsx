import { ScrollArea } from '@/components/ui/scroll-area'
import { Accordion } from '@/components/ui/accordion'
import { DesignSection } from './controls/DesignSection'
import { SpacingSection } from './controls/SpacingSection'
import { EffectsSection } from './controls/EffectsSection'
import { PresetsSection } from './controls/PresetsSection'

export function ControlsSidebar() {
  return (
    <ScrollArea className="h-full">
      <div className="p-6">
        <h2 className="mb-6 text-lg font-semibold">Theme Controls</h2>

        <Accordion
          type="multiple"
          defaultValue={['design', 'spacing', 'effects']}
          className="space-y-4"
        >
          <PresetsSection />
          <DesignSection />
          <SpacingSection />
          <EffectsSection />
        </Accordion>
      </div>
    </ScrollArea>
  )
}