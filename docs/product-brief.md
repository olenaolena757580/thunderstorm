# Product brief

Firefighting drones for oil and gas and other severely dangerous industrial
sites. A drone is delivered to the site, assembled and armed by a courier, then
flown manually by an operator, who releases extinguishing powder over the
danger zone. Managers follow many jobs at once.

Sites carry a risk of fire and explosion. The courier leaves the site as fast
as possible. Jobs come from other software, so the apps do not create them.

## Roles and apps

Three roles, one codebase, shown as three apps that share accounts, jobs, live
status and alerts.

| Role | Who | What they do | Devices |
|---|---|---|---|
| Courier | Field worker, gloves, bright sun, may have poor eyesight | Gets the job by QR code, code or API. Pre-assembles the drone before the site, with photo checks. On site: connects and attaches, removes the launcher safety, places the drone, runs the connection test, leaves | Phone, portrait, works offline |
| Operator | Pilot, one job at a time, one operator per flight | Receives "delivery complete", checks the link, flies manually with live video and a map. Powder discharge needs a double confirmation (slider, with a cancel window). After a lost link: hold until it returns | Desktop, phone landscape |
| Manager | Oversees many jobs in parallel, view only | Summary first (successful missions), drill-down into sites, flights, people, drones. Can pick an Operator for a job, cannot reassign. Live video on request. No reports for now | Desktop, phone landscape |

## Decisions so far

- The Operator is not asked to approve the courier's work. They only receive the
  news that delivery is complete.
- The courier reports that the safety is removed in the app. The app tests the
  connection with the drone.
- Placing the drone is final, with rare exceptions (serious assembly issue).
- Operators cannot give a job back. They can forward it. Peer takeover only in
  critical cases. No shared flight control for now.
- Camera: plain only. No night vision, no thermal.
- Drone is identified by scanning or typing the code from the drone first.
  NFC and a job code come later.
- Courier interface: larger type (smallest 20 pt), higher contrast, targets of
  64 pt or more, one thing per screen, everything else behind More.

## Open questions

See the boards in the design file, under "To confirm before we draw". Main ones:
pre-assembly photo rules, which connection lines must pass, the exact discharge
confirmation pattern and cancel window, how a mission is marked successful when
the drone is lost, Manager milestones (to be researched from firefighting
incident command), and drone ID code format.

## Design

See `docs/design-system.md` and the Lilac design system in the design file.
