/********************************************************************************
 * Copyright (c) 2021, 2024 Contributors to the Eclipse Foundation
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

declare const ENV: Record<string, string>

// get the value of REQUIRE_HTTPS_URL_PATTERN environment variable, defaulting to 'true' if not set
export const getRequireHttpsUrlPattern = () =>
  typeof ENV === 'undefined' ? 'true' : ENV.REQUIRE_HTTPS_URL_PATTERN

export const getApiBase = () =>
  typeof ENV === 'undefined' ? '' : ENV.PORTAL_BACKEND_URL

export const getAssetBase = () =>
  typeof ENV === 'undefined' ? '' : ENV.PORTAL_ASSETS_URL

export const getCentralIdp = () =>
  typeof ENV === 'undefined' ? '' : ENV.CENTRALIDP_URL

export const getClientId = () => 'Cl2-CX-Portal'

export const getBpdmApiBase = () =>
  typeof ENV === 'undefined' ? '' : ENV.BPDM_API_URL

export const getSemanticApiBase = () =>
  typeof ENV === 'undefined' ? '' : ENV.SEMANTICS_URL

export const getClientIdSemantic = () => 'Cl3-CX-Semantic'

export const getManagedIdentityWalletsNewBase = () =>
  typeof ENV === 'undefined' ? '' : ENV.MANAGED_IDENTITY_WALLETS_NEW_URL

export const getClientIdManagedIdentityWallets = () => 'Cl5-CX-Custodian'

const EnvironmentService = {
  getRequireHttpsUrlPattern,
  getApiBase,
  getAssetBase,
  getBpdmApiBase,
  getCentralIdp,
  getSemanticApiBase,
  getClientId,
  getClientIdSemantic,
  getManagedIdentityWalletsNewBase,
  getClientIdManagedIdentityWallets,
}

export default EnvironmentService
