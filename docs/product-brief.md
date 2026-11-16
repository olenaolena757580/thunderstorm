# Product brief

Monitoring drones for oil and gas sites. A drone is delivered to a remote site,
set up and activated by a courier, flown and monitored remotely by engineers,
and the results are reviewed by managers.

## Roles and apps

| Role | Who | App | Platform |
|---|---|---|---|
| Courier | Novice, non-technical field worker | Delivery, setup, checks, activation | Phone |
| Operator | Engineer, works in a pair with a peer | Remote session over video broadcast | Desktop |
| Manager | C-level | Summary, drill-down analytics, observer mode | Desktop |

## Design directions

**A, Courier: one clear step at a time.** One task per screen in plain
language. Checks that cannot be skipped. Fast data entry. Activation only after
every check has passed. Works without signal. Leave the site as fast as
possible. The flow opens with one safety tap, and ends with "Leave now" as the
only thing on screen, shown only when every check has passed and the drone is
active. Whatever can wait is saved on the phone and sent later.

**B, Operator: ready, live, decided.** No session before the ready notice
(delivered, checked, set). Live data and the video broadcast in one window. One
shared view with the peer operator. An explicit success or failure call with
detailed session analysis. Link health and video delay always visible. A lost
link to the drone is unmistakable: banner above the content, frozen and stale
data marked as such. Open: Success is disabled while the link is down, to be
confirmed.

**C, Manager: summary first, then drill down.** A summary comes first.
Drill-down from success and failure analytics, to one delivery, to one session.
An overview of the field delivery process. Observer mode that cannot disturb the
session. No reports or export for now.

## Site conditions

Sites carry a risk of explosion and have safety rules. The main rule is to leave
the site as fast as possible. The exact checks are still to be supplied by
someone who knows the sites; the app should refer to "the site's safety rules"
in general terms and not assume specific standards.

## Open questions

- Which phone models are allowed on site (certified devices), and how the app is installed on them.
- Exact site safety checks.
- Who sets assignments? Manager?
- Whether Success can be called while the link is lost.
- Product name (placeholder: Startup).

The design boards live in the "Startup Org Structure" design file.
