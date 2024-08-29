/********************************************************************************
 * Copyright (c) 2024 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { type SyntheticEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Typography,
  IconButton,
  Tabs,
  Tab,
  TabPanel,
} from '@catena-x/portal-shared-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LinkIcon from '@mui/icons-material/Link'
import { Box } from '@mui/material'
import './OnboardingServiceProvider.scss'

const OnboardingServiceProvider = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabChange = (
    _e: SyntheticEvent<Element, Event>,
    value: number
  ) => {
    setActiveTab(value)
  }

  const getTabsIcon = (step: number) => {
    return (
      <Typography
        variant="label3"
        sx={{
          background: activeTab + 1 === step ? '#0f71cb' : 'white',
          color: activeTab + 1 === step ? 'white' : '#0f71cb',
          outline: '2px solid #0f71cb',
          flex: '0',
          marginRight: '20px',
          borderRadius: '50%',
          height: '20px',
          width: '20px',
          minWidth: '20px',
          textAlign: 'center',
          lineHeight: '20px',
          position: 'relative',
        }}
      >
        {step}
      </Typography>
    )
  }
  return (
    <main className="onboarding-service-page-container ">
      <section>
        <div className="onboarding-service-header">
          <Typography variant="h2" className="onboarding-service-title">
            {t('content.onboardingServiceProvider.headertitle')}
          </Typography>
          <Typography variant="body2" className="onboarding-service-desc">
            {t('content.onboardingServiceProvider.desc')}
          </Typography>
          <Box
            sx={{
              position: 'relative',
              height: '100%',
              width: '90%',
              background: '#F4FBFD',
              margin: 'auto',
            }}
          >
            <IconButton
              aria-label="close"
              onClick={() => {}}
              sx={{
                left: '0',
                position: 'absolute',
                top: '50%',
                msTransform: 'translateY(-50%)',
                transform: 'translateY(-50%)',
              }}
            >
              <LinkIcon />
            </IconButton>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body3">
                {t('content.onboardingServiceProvider.subDesc1')}
              </Typography>
              <Typography variant="body3">
                {t('content.onboardingServiceProvider.subDesc2')}
              </Typography>
            </Box>
            <IconButton
              aria-label="close"
              onClick={() => {}}
              sx={{
                right: '0',
                position: 'absolute',
                top: '50%',
                msTransform: 'translateY(-50%)',
                transform: 'translateY(-50%)',
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </div>
      </section>

      <Box>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{ margin: '0 10% 70px' }}
        >
          <Tab
            iconPosition="start"
            icon={getTabsIcon(1)}
            aria-controls={`simple-tabpanel-${activeTab}`}
            id={`simple-tab-${activeTab}`}
            label={t('content.onboardingServiceProvider.tabletitle1')}
            sx={{
              textTransform: 'none',
              display: 'inline-flex',
              width: '100%',
              maxWidth: '550px',
              '&.Mui-selected': {
                borderBottom: '3px solid #0f71cb',
              },
            }}
          />
          <Tab
            iconPosition="start"
            icon={getTabsIcon(2)}
            aria-controls={`simple-tabpanel-${activeTab}`}
            id={`simple-tab-${activeTab}`}
            label={t('content.onboardingServiceProvider.tabletitle2')}
            sx={{
              textTransform: 'none',
              display: 'inline-flex',
              width: '100%',
              maxWidth: '550px',
              '&.Mui-selected': {
                borderBottom: '3px solid #0f71cb',
              },
            }}
          />
        </Tabs>
        <TabPanel value={activeTab} index={0}>
          <div className="connector-table-container"></div>
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <div className="connector-table-container"></div>
        </TabPanel>
      </Box>
    </main>
  )
}

export default OnboardingServiceProvider
