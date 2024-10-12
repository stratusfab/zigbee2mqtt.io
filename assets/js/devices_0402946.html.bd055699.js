"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[149],{36942:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>c,data:()=>i});var d=t(1768);const a={},c=(0,t(69420).A)(a,[["render",function(e,o){const t=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[o[8]||(o[8]=(0,d.Lk)("h1",{id:"datek-0402946",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#datek-0402946"},[(0,d.Lk)("span",null,"Datek 0402946")])],-1)),(0,d.Lk)("table",null,[o[6]||(o[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[o[2]||(o[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"0402946")],-1)),(0,d.Lk)("tr",null,[o[1]||(o[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(t,{to:"/supported-devices/#v=Datek"},{default:(0,d.k6)((()=>o[0]||(o[0]=[(0,d.eW)("Datek")]))),_:1})])]),o[3]||(o[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Zigbee module for ID lock")],-1)),o[4]||(o[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"lock (state, lock_state), battery, pin_code, door_state, action, action_source_name, action_user, sound_volume, master_pin_mode, rfid_enable, relock_enabled, lock_mode, service_mode, linkquality")],-1)),o[5]||(o[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/0402946.png",alt:"Datek 0402946"})])],-1))])]),o[9]||(o[9]=(0,d.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>If pairing failed, try the followings:</p><ul><li>Make sure door are in open state</li><li>Press and hold manual lock button and wait for 3 beeps</li><li>Keypad in front lights up</li><li>Type inn the Master PIN, then *, then 2, then *, then 0 Lock will now reset the Zigbee module and go to pairing mode</li></ul><h3 id="pin-code-usage" tabindex="-1"><a class="header-anchor" href="#pin-code-usage"><span>PIN Code Usage</span></a></h3><p>To retrieve the state, send a <code>get</code> message to the device topic (<code>zigbee2mqtt/DEVICE_FRIENDLY_NAME/get</code>) with the body <code>{&quot;pin_code&quot;:{&quot;user&quot;:1}}</code>. To set, send a <code>set</code> message to the device topic (<code>zigbee2mqtt/DEVICE_FRIENDLY_NAME/set</code>) with the body <code>{&quot;pin_code&quot;:{&quot;user&quot;:1,&quot;pin_code&quot;:1234}}</code>. To clear a code, send a <code>set</code> message with the body <code>{&quot;pin_code&quot;:{&quot;user&quot;:1}}</code></p><h3 id="manual" tabindex="-1"><a class="header-anchor" href="#manual"><span>Manual</span></a></h3><p><a href="https://idlock.no/wp-content/uploads/2018/03/20180123-001-IDL150-UserManual.pdf" target="_blank" rel="noopener noreferrer">ID LOCK 150 user manual</a><a href="https://idlock.no/wp-content/uploads/2020/11/User-Manual-Zigbee-module_EN_v0.4.pdf" target="_blank" rel="noopener noreferrer">Zigbee module user manual</a></p><h3 id="where-do-i-find-this-product" tabindex="-1"><a class="header-anchor" href="#where-do-i-find-this-product"><span>Where do I find this product</span></a></h3><p><a href="https://shop.evasmart.no/produkt/smarthus/id-lock-dorlaspakke" target="_blank" rel="noopener noreferrer">Product page</a></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',11)),(0,d.Lk)("p",null,[(0,d.Lk)("em",null,[(0,d.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.k6)((()=>o[7]||(o[7]=[(0,d.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,d.Fv)('<ul><li><code>expose_pin</code>: Expose pin of this lock in the published payload (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock"><span>Lock</span></a></h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="pin-code-composite" tabindex="-1"><a class="header-anchor" href="#pin-code-composite"><span>Pin code (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pin_code&quot;: {&quot;user&quot;: VALUE, &quot;user_type&quot;: VALUE, &quot;user_enabled&quot;: VALUE, &quot;pin_code&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pin_code&quot;: &quot;&quot;}</code>.</p><ul><li><code>user</code> (numeric): User ID to set or clear the pincode for</li><li><code>user_type</code> (enum): Type of user, unrestricted: owner (default), (year|week)_day_schedule: user has ability to open lock based on specific time period, master: user has ability to both program and operate the door lock, non_access: user is recognized by the lock but does not have the ability to open the lock allowed values: <code>unrestricted</code>, <code>year_day_schedule</code>, <code>week_day_schedule</code>, <code>master</code>, <code>non_access</code></li><li><code>user_enabled</code> (binary): Whether the user is enabled/disabled allowed values: <code>true</code> or <code>false</code></li><li><code>pin_code</code> (numeric): Pincode to set, set pincode to null to clear</li></ul><h3 id="door-state-enum" tabindex="-1"><a class="header-anchor" href="#door-state-enum"><span>Door state (enum)</span></a></h3><p>State of the door. Value can be found in the published state on the <code>door_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>open</code>, <code>closed</code>, <code>error_jammed</code>, <code>error_forced_open</code>, <code>error_unspecified</code>, <code>undefined</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action on the lock. Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>unknown</code>, <code>lock</code>, <code>unlock</code>, <code>lock_failure_invalid_pin_or_id</code>, <code>lock_failure_invalid_schedule</code>, <code>unlock_failure_invalid_pin_or_id</code>, <code>unlock_failure_invalid_schedule</code>, <code>one_touch_lock</code>, <code>key_lock</code>, <code>key_unlock</code>, <code>auto_lock</code>, <code>schedule_lock</code>, <code>schedule_unlock</code>, <code>manual_lock</code>, <code>manual_unlock</code>, <code>non_access_user_operational_event</code>.</p><h3 id="action-source-name-enum" tabindex="-1"><a class="header-anchor" href="#action-source-name-enum"><span>Action source name (enum)</span></a></h3><p>Source of the triggered action on the lock. Value can be found in the published state on the <code>action_source_name</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>keypad</code>, <code>rfid</code>, <code>manual</code>, <code>rf</code>.</p><h3 id="action-user-numeric" tabindex="-1"><a class="header-anchor" href="#action-user-numeric"><span>Action user (numeric)</span></a></h3><p>ID of user that triggered the action on the lock. Value can be found in the published state on the <code>action_user</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="sound-volume-enum" tabindex="-1"><a class="header-anchor" href="#sound-volume-enum"><span>Sound volume (enum)</span></a></h3><p>Sound volume of the lock. Value can be found in the published state on the <code>sound_volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sound_volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>silent_mode</code>, <code>low_volume</code>, <code>high_volume</code>.</p><h3 id="master-pin-mode-binary" tabindex="-1"><a class="header-anchor" href="#master-pin-mode-binary"><span>Master pin mode (binary)</span></a></h3><p>Allow Master PIN Unlock. Value can be found in the published state on the <code>master_pin_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;master_pin_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;master_pin_mode&quot;: NEW_VALUE}</code>. If value equals <code>true</code> master pin mode is ON, if <code>false</code> OFF.</p><h3 id="rfid-enable-binary" tabindex="-1"><a class="header-anchor" href="#rfid-enable-binary"><span>Rfid enable (binary)</span></a></h3><p>Allow RFID to Unlock. Value can be found in the published state on the <code>rfid_enable</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;rfid_enable&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rfid_enable&quot;: NEW_VALUE}</code>. If value equals <code>true</code> rfid enable is ON, if <code>false</code> OFF.</p><h3 id="relock-enabled-binary" tabindex="-1"><a class="header-anchor" href="#relock-enabled-binary"><span>Relock enabled (binary)</span></a></h3><p>Allow Auto Re-Lock. Value can be found in the published state on the <code>relock_enabled</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;relock_enabled&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;relock_enabled&quot;: NEW_VALUE}</code>. If value equals <code>true</code> relock enabled is ON, if <code>false</code> OFF.</p><h3 id="lock-mode-enum" tabindex="-1"><a class="header-anchor" href="#lock-mode-enum"><span>Lock mode (enum)</span></a></h3><p>Lock-Mode of the Lock. Value can be found in the published state on the <code>lock_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lock_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lock_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>auto_off_away_off</code>, <code>auto_on_away_off</code>, <code>auto_off_away_on</code>, <code>auto_on_away_on</code>.</p><h3 id="service-mode-enum" tabindex="-1"><a class="header-anchor" href="#service-mode-enum"><span>Service mode (enum)</span></a></h3><p>Service Mode of the Lock. Value can be found in the published state on the <code>service_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;service_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;service_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>deactivated</code>, <code>random_pin_1x_use</code>, <code>random_pin_24_hours</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',31))])}]]),i=JSON.parse('{"path":"/devices/0402946.html","title":"Datek 0402946 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Datek 0402946 control via MQTT","description":"Integrate your Datek 0402946 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-04-29T18:07:03.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"PIN Code Usage","slug":"pin-code-usage","link":"#pin-code-usage","children":[]},{"level":3,"title":"Manual","slug":"manual","link":"#manual","children":[]},{"level":3,"title":"Where do I find this product","slug":"where-do-i-find-this-product","link":"#where-do-i-find-this-product","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Pin code (composite)","slug":"pin-code-composite","link":"#pin-code-composite","children":[]},{"level":3,"title":"Door state (enum)","slug":"door-state-enum","link":"#door-state-enum","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Action source name (enum)","slug":"action-source-name-enum","link":"#action-source-name-enum","children":[]},{"level":3,"title":"Action user (numeric)","slug":"action-user-numeric","link":"#action-user-numeric","children":[]},{"level":3,"title":"Sound volume (enum)","slug":"sound-volume-enum","link":"#sound-volume-enum","children":[]},{"level":3,"title":"Master pin mode (binary)","slug":"master-pin-mode-binary","link":"#master-pin-mode-binary","children":[]},{"level":3,"title":"Rfid enable (binary)","slug":"rfid-enable-binary","link":"#rfid-enable-binary","children":[]},{"level":3,"title":"Relock enabled (binary)","slug":"relock-enabled-binary","link":"#relock-enabled-binary","children":[]},{"level":3,"title":"Lock mode (enum)","slug":"lock-mode-enum","link":"#lock-mode-enum","children":[]},{"level":3,"title":"Service mode (enum)","slug":"service-mode-enum","link":"#service-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728731901000},"filePathRelative":"devices/0402946.md"}')}}]);