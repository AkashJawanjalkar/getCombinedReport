// const cds = require('@sap/cds');
// const axios = require('axios');

// module.exports = cds.service.impl(async function () {

//     const username = process.env.S4H_USERNAME || 'API_USER1_IN';
//     const password = process.env.S4H_PASSWORD || '@#Store@12451@#Store@12451';

//     const getAuthHeader = () => ({
//         Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
//         Accept: 'application/json'
//     });

//     const BILLING_API = 'https://my420267-api.s4hana.cloud.sap/sap/opu/odata/sap/API_BILLING_DOCUMENT_SRV/A_BillingDocument';
//     const BP_API = 'https://my420267-api.s4hana.cloud.sap/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner';
//     const PRODUCT_API = 'https://my420267-api.s4hana.cloud.sap/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product';
//     const COMPANYCODE_CDS = 'https://my420267-api.s4hana.cloud.sap/sap/opu/odata/sap/YY1_VGS_COMPANYCODE_CDS/YY1_VGS_COMPANYCODE';
//     const BUPLA_CDS = 'https://my420267-api.s4hana.cloud.sap/sap/opu/odata/sap/YY1_VGS_BUPLA_CDS/YY1_VGS_BUPLA';
//     const BSEG1_CDS = 'https://my420267-api.s4hana.cloud.sap/sap/opu/odata/sap/YY1_VGS_BSEG1_CDS/YY1_VGS_BSEG1';

//     const template = {
//         additional_supporting_document_url: "",
//         additional_supporting_document: "",
//         additional_information: "",
//         batch_name: "",
//         batch_warranty_date: "",
//         batch_expiry_date: "",
//         buyer_gstin: "",
//         buyer_legal_name: "",
//         buyer_trade_name: "",
//         buyer_place_of_supply: "",
//         buyer_address1: "",
//         buyer_address2: "",
//         buyer_location: "",
//         buyer_pincode: "",
//         buyer_state_code: "",
//         buyer_phone_number: "",
//         buyer_email: "",
//         cancel_einvoice_irn: "",
//         cancel_einvoice_cancel_reason: "",
//         cancel_einvoice_cancel_remarks: "",
//         cancel_einvoice_ewaybill_cancel: "",
//         cancel_eway_bill_eway_bill_number: "",
//         cancel_eway_bill_reason_of_cancel: "",
//         cancel_eway_bill_cancel_remark: "",
//         cancel_eway_bill_data_source: "",
//         contact_details_project_reference_number: "",
//         contact_details_receipt_advice_number: "",
//         contact_details_receipt_advice_date: "",
//         contact_details_batch_reference_number: "",
//         contact_details_contract_reference_number: "",
//         contact_details_other_reference: "",
//         contact_details_vendor_po_reference_number: "",
//         contact_details_vendor_po_reference_date: "",
//         dispatch_company_name: "",
//         dispatch_address1: "",
//         dispatch_address2: "",
//         dispatch_location: "",
//         dispatch_pincode: "",
//         dispatch_state_code: "",
//         document_companycode: "",
//         document_type: "",
//         document_number: "",
//         document_date: "",
//         document_AccountingDocument: "",
//         document_FiscalYear: "",
//         document_BillingDocumentIsCancelled: "",
//         document_CancelledBillingDocument: "",
//         einvoice_success_code: "",
//         einvoice_nic_code: "",
//         ewaybill_Status: "",
//         ewaybill_code: "",
//         ewaybill_details_transporter_id: "",
//         ewaybill_details_transporter_name: "",
//         ewaybill_details_transportation_mode: "",
//         ewaybill_details_transportation_distance: "",
//         ewaybill_details_transporter_document_number: "",
//         ewaybill_details_transporter_document_date: "",
//         ewaybill_details_vehicle_number: "",
//         ewaybill_details_vehicle_type: "",
//         ewaybill_details_sub_supply_type: "",
//         ewaybill_details_gstin_of_consignor: "",
//         ewaybill_details_legal_name_of_consignor: "",
//         ewaybill_details_address1_of_consignor: "",
//         ewaybill_details_address2_of_consignor: "",
//         ewaybill_details_pincode_of_consignor: "",
//         ewaybill_details_gstin_of_consignee: "",
//         ewaybill_details_legal_name_of_consignee: "",
//         ewaybill_details_address1_of_consignee: "",
//         ewaybill_details_address2_of_consignee: "",
//         ewaybill_details_place_of_consignee: "",
//         ewaybill_details_pincode_of_consignee: "",
//         ewaybill_details_state_of_supply: "",
//         ewaybill_details_product_name: "",
//         ewaybill_details_unit_of_product: "",
//         ewaybill_details_cgst_rate: 0,
//         ewaybill_details_sgst_rate: 0,
//         ewaybill_details_igst_rate: 0,
//         ewaybill_details_cess_rate: 0,
//         ewaybill_details_ewayBillNo: "",
//         ewaybill_details_ewayBillDate: "",
//         ewaybill_details_mode_of_transport: "",
//         ewaybill_details_group_number: "",
//         ewaybill_details_remaining_distance: 0,
//         ewaybill_details_place_of_consignor: "",
//         ewaybill_details_reason_code_for_vehicle_updation: "",
//         ewaybill_details_reason_for_vehicle_updation: "",
//         ewaybill_details_state_of_consignor: "",
//         ewaybill_details_old_vehicle_number: "",
//         ewaybill_details_new_vehicle_number: "",
//         ewaybill_details_old_transporter_document_number: "",
//         ewaybill_details_new_transporter_document_number: "",
//         ewaybill_details_taxable_amount: 0,
//         export_details_ship_bill_number: "",
//         export_details_ship_bill_date: "",
//         export_details_port_code: "",
//         export_details_refund_claim: "",
//         export_details_foreign_currency: "",
//         export_details_country_code: "",
//         export_details_export_duty: 0,
//         get_invoice_details_AckNo: "",
//         get_invoice_details_AckDt: "",
//         get_eway_bill_details_status: "",
//         get_eway_bill_details_ewbno: "",
//         get_eway_bill_details_ewbdt: "",
//         get_eway_bill_details_ewbvalidtill: "",
//         get_eway_bill_details_errorMessage: "",
//         get_eway_bill_details_failed_status: "",
//         get_eway_bill_details_code: "",
//         item_list_item_serial_number: "",
//         item_list_product_code: "",
//         item_list_product_description: "",
//         item_list_is_service: "",
//         item_list_hsn_code: "",
//         item_list_bar_code: "",
//         item_list_quantity: 0,
//         item_list_free_quantity: 0,
//         item_list_unit: "",
//         item_list_unit_price: 0,
//         item_list_total_amount: 0,
//         item_list_discount: 0,
//         item_list_pre_tax_value: 0,
//         item_list_other_charge: 0,
//         item_list_assessable_value: 0,
//         item_list_gst_rate: 0,
//         item_list_igst_amount: 0,
//         item_list_cgst_amount: 0,
//         item_list_sgst_amount: 0,
//         item_list_cess_nonadvol_amount: 0,
//         item_list_cess_cess_amount: 0,
//         item_list_cess_state_cess_amount: 0,
//         item_list_cess_state_cess_nonadvol_amount: 0,
//         item_list_order_line_reference: "",
//         item_list_country_origin: "",
//         item_list_product_serial_number: "",
//         item_list_attribute_details: "",
//         item_list_attribute_value: "",
//         item_list_total_item_value: "",
//         payment_details_bank_account_number: "",
//         payment_details_paid_balance_amount: 0,
//         payment_details_credit_days: 0,
//         payment_details_direct_debit: "",
//         payment_details_credit_transfer: "",
//         payment_details_branch: "",
//         payment_details_payment_mode: "",
//         payment_details_payee_name: "",
//         payment_details_payment_instruction: "",
//         payment_details_outstanding_amount: 0,
//         payment_details_payment_term: "",
//         preceding_document_details_reference_of_original_invoice: "",
//         preceding_document_details_preceding_invoice_date: "",
//         preceding_document_details_other_reference: "",
//         reference_details_other_reference: "",
//         reference_details_invoice_period_start_date: "",
//         reference_details_invoice_period_end_date: "",
//         reference_details_invoice_reference_number: "",
//         reference_details_invoice_remarks: "",
//         seller_details_gstin: "",
//         seller_details_legal_name: "",
//         seller_details_trade_name: "",
//         seller_details_address1: "",
//         seller_details_address2: "",
//         seller_details_location: "",
//         seller_details_pincode: "",
//         seller_details_state_code: "",
//         seller_details_phone_number: "",
//         seller_details_email: "",
//         ship_details_gstin: "",
//         ship_details_legal_name: "",
//         ship_details_trade_name: "",
//         ship_details_address1: "",
//         ship_details_address2: "",
//         ship_details_location: "",
//         ship_details_pincode: "",
//         ship_details_state_code: "",
//         transaction_details_user_gstin: "",
//         transaction_details_supply_type: "",
//         transaction_details_charge_type: "",
//         transaction_details_ecommerce_gstin: "",
//         transaction_details_BillingDocumentType: "",
//         transaction_details_igst_on_intra: "",
//         value_details_total_assessable_value: 0,
//         value_details_total_cgst_value: 0,
//         value_details_total_sgst_value: 0,
//         value_details_total_igst_value: 0,
//         value_details_total_cess_value: 0,
//         value_details_total_cess_value_of_state: 0,
//         value_details_round_off_amount: 0,
//         value_details_total_invoice_value: 0,
//         value_details_total_discount: 0,
//         value_details_total_other_charge: 0,
//         value_details_total_invoice_value_additional_currency: 0
//     };

//     this.on('getCombinedReport', async (req) => {
//         try {
//             const {
//                 CompanyCode, Plant, BillingDocType, BillingDocNo,
//                 BillingDateFrom, BillingDateTo, Customer
//             } = req.data;

//             if (!CompanyCode || !Plant || !BillingDateFrom || !BillingDateTo) {
//                 return { error: "CompanyCode, Plant, and Billing Date Range are mandatory!" };
//             }

//             /* =======================
//                BUILD BILLING FILTER
//             ======================== */
//             let filters = [];

//             if (CompanyCode?.length)
//                 filters.push(`(${CompanyCode.map(c => `CompanyCode eq '${c}'`).join(' or ')})`);

//             if (BillingDocType?.length)
//                 filters.push(`(${BillingDocType.map(t => `BillingDocumentType eq '${t}'`).join(' or ')})`);

//             if (BillingDocNo?.length)
//                 filters.push(`(${BillingDocNo.map(d => `BillingDocument eq '${d}'`).join(' or ')})`);

//             if (BillingDateFrom && BillingDateTo)
//                 filters.push(
//                     `BillingDocumentDate ge datetime'${BillingDateFrom}T00:00:00' and ` +
//                     `BillingDocumentDate le datetime'${BillingDateTo}T23:59:59'`
//                 );

//             if (Customer?.length)
//                 filters.push(`(${Customer.map(c => `SoldToParty eq '${c}'`).join(' or ')})`);

//             const filterQuery = filters.join(' and ');

//             /* =======================
//                BILLING API PAGING
//             ======================== */
//             let billingDocs = [];
//             let skip = 0;
//             const batchSize = 100;

//             while (true) {
//                 const res = await axios.get(
//                     `${BILLING_API}?$filter=${filterQuery}&$top=${batchSize}&$skip=${skip}` +
//                     `&$select=CompanyCode,BillingDocument,BillingDocumentCategory,` +
//                     `BillingDocumentDate,AccountingDocument,FiscalYear,BillingDocumentType,TotalGrossAmount,` +
//                     `BillingDocumentIsCancelled,CancelledBillingDocument,SoldToParty,to_Partner&$expand=to_Partner,to_Item`,
//                     { headers: getAuthHeader() }
//                 );

//                 const batch = res.data.d?.results || [];
//                 billingDocs.push(...batch);

//                 if (batch.length < batchSize) break;
//                 skip += batchSize;
//             }

//             /* =======================
//                BUSINESS PARTNER PAGING
//             ======================== */
//             let allBusinessPartners = [];
//             let bpSkip = 0;
//             const bpBatchSize = 100;

//             while (true) {
//                 const BPres = await axios.get(
//                     `${BP_API}?$top=${bpBatchSize}&$skip=${bpSkip}` +
//                     // `&$select=BusinessPartner,Customer,BusinessPartnerFullName` +
//                     `&$expand=to_BusinessPartnerAddress,to_BuPaIdentification,to_BusinessPartnerBank,to_BusinessPartnerAddress/to_EmailAddress`,
//                     { headers: getAuthHeader() }
//                 );

//                 const batch = BPres.data.d?.results || [];
//                 allBusinessPartners.push(...batch);

//                 if (batch.length < bpBatchSize) break;
//                 bpSkip += bpBatchSize;
//             }

//             /* =======================
//                FILTER BP BY CUSTOMER
//             ======================== */
//             let filteredBusinessPartners = allBusinessPartners;

//             if (Customer?.length) {
//                 const customerSet = new Set(Customer);
//                 filteredBusinessPartners = allBusinessPartners.filter(
//                     bp => bp.Customer && customerSet.has(bp.Customer)
//                 );
//             }

//             /* =======================
//                FAST LOOKUP MAP
//             ======================== */
//             const bpByCustomer = new Map();
//             filteredBusinessPartners.forEach(bp => {
//                 bpByCustomer.set(bp.Customer, bp);
//             });


//             /* =======================
//                COMPANY CODE PAGING
//             ======================== */
//             let comcodeskip = 0;
//             const comcodeBatchSize = 100;
//             let comcodeAllResults = [];

//             const companyCodeFilter =
//                 CompanyCode?.length
//                     ? `(${CompanyCode.map(c => `CompanyCode eq '${c}'`).join(' or ')})`
//                     : '';

//             while (true) {
//                 const response = await axios.get(
//                     `${COMPANYCODE_CDS}?$filter=${companyCodeFilter}&$top=${comcodeBatchSize}&$skip=${comcodeskip}`,
//                     { headers: getAuthHeader() }
//                 );

//                 const batch = response.data.d?.results || [];
//                 comcodeAllResults.push(...batch);

//                 if (batch.length < comcodeBatchSize) break;
//                 comcodeskip += comcodeBatchSize;
//             }

//             const companyCodeMap = {};
//             comcodeAllResults.forEach(cc => {
//                 companyCodeMap[cc.CompanyCode] = cc;
//             });

//             /* =======================
//                BUILD FINAL RESULT
//             ======================== */
//             let tempArray = [];

//             for (const bill of billingDocs) {

//                 const obj = { ...template };
//                 let igst_on_intra = "N"; // default

//                 /* =========================
//                    DOCUMENT DETAILS
//                 ========================== */
//                 obj.document_companycode = bill.CompanyCode || '';
//                 obj.document_type = bill.BillingDocumentType || '';
//                 obj.document_number = bill.BillingDocument || '';
//                 obj.document_date = bill.BillingDocumentDate || '';
//                 obj.document_AccountingDocument = bill.AccountingDocument || '';
//                 obj.document_FiscalYear = bill.FiscalYear || '';
//                 obj.document_BillingDocumentIsCancelled = bill.BillingDocumentIsCancelled == false ? "N" : "Y";
//                 obj.document_CancelledBillingDocument = bill.CancelledBillingDocument;
//                 obj.payment_details_payment_term = bill.CustomerPaymentTerms || '';
//                 obj.preceding_document_details_reference_of_original_invoice = bill.CancelledBillingDocument;
//                 obj.preceding_document_details_preceding_invoice_date = bill.BillingDocumentDate || '';
//                 obj.preceding_document_details_other_reference = bill.AccountingDocument || '';
//                 obj.reference_details_invoice_period_start_date = bill.BillingDocumentDate || '';
//                 obj.reference_details_invoice_period_end_date = bill.BillingDocumentDate || '';
//                 obj.reference_details_invoice_reference_number = bill.AccountingDocument || '';
//                 obj.transaction_details_BillingDocumentType = bill.BillingDocumentType || '';
//                 obj.value_details_total_invoice_value = bill.TotalGrossAmount || '00' ;






//                 /* =========================
//                    BUYER (BP)
//                 ========================== */
//                 const bp = bpByCustomer.get(bill.SoldToParty);
//                 if (bp) {
//                     obj.buyer_legal_name = bp.BusinessPartnerFullName || '';
//                     obj.buyer_trade_name = bp.BusinessPartnerFullName || '';
//                     obj.buyer_place_of_supply = bp.to_BusinessPartnerAddress?.results?.[0].Region || '';
//                     obj.buyer_address1 = bp.to_BusinessPartnerAddress?.results?.[0].StreetName || '';
//                     obj.buyer_address2 = '';
//                     obj.buyer_location = bp.to_BusinessPartnerAddress?.results?.[0].CityName || '';
//                     obj.buyer_pincode = bp.to_BusinessPartnerAddress?.results?.[0].PostalCode || '';
//                     obj.buyer_state_code = bp.to_BusinessPartnerAddress?.results?.[0].Region || '';
//                     obj.buyer_phone_number = '';
//                     obj.buyer_email = bp.to_BusinessPartnerAddress?.results?.[0].to_EmailAddress?.results?.[0].EmailAddress || '';
//                     obj.export_details_country_code = bp.to_BusinessPartnerAddress?.results?.[0].Country || '';
//                     obj.payment_details_bank_account_number = bp?.to_BusinessPartnerBank?.results?.[0]?.BankAccount || '';
//                     obj.payment_details_bank_account_number = bp?.to_BusinessPartnerBank?.results?.[0]?.BankNumber || '';
//                     obj.seller_details_trade_name = bp.BusinessPartnerFullName || '';
//                 }

//                 /* =========================
//                    DISPATCH (COMPANY CODE – DEFAULT)
//                 ========================== */
//                 const company = companyCodeMap[bill.CompanyCode];
//                 if (company) {
//                     obj.dispatch_company_name = company.CompanyCodeName || '';
//                     obj.dispatch_address1 = company.StreetName || '';
//                     obj.dispatch_address2 = '';
//                     obj.dispatch_location = company.CityName || '';
//                     obj.dispatch_pincode = company.PostalCode || '';
//                     obj.dispatch_state_code = company.Region || '';
//                 }

//                 /* =========================
//                    DISPATCH OVERRIDE (BSEG1 → BUPLA)
//                 ========================== */
//                 try {
//                     const billInfoResp = await axios.get(
//                         `${BILLING_API}('${bill.BillingDocument}')?$select=AccountingDocument,FiscalYear,CompanyCode`,
//                         { headers: getAuthHeader() }
//                     );

//                     const billInfo = billInfoResp.data.d || {};
//                     const { AccountingDocument, FiscalYear, CompanyCode } = billInfo;

//                     if (AccountingDocument && FiscalYear && CompanyCode) {

//                         const bsegResp = await axios.get(
//                             `${BSEG1_CDS}?$filter=` +
//                             `AccountingDocument eq '${AccountingDocument}' and ` +
//                             `FiscalYear eq '${FiscalYear}' and ` +
//                             `CompanyCode eq '${CompanyCode}' and ` +
//                             `FinancialAccountType eq 'D'` +
//                             `&$select=BusinessPlace`,
//                             { headers: getAuthHeader() }
//                         );

//                         const businessPlace =
//                             bsegResp.data.d?.results?.[0]?.BusinessPlace;

//                         if (businessPlace) {
//                             const buplaResp = await axios.get(
//                                 `${BUPLA_CDS}?$filter=BusinessPlace eq '${businessPlace}'` +
//                                 `&$select=BusinessPlace,PostalCode,Region,CityName,StreetName,IN_GSTIdentificationNumber`,
//                                 { headers: getAuthHeader() }
//                             );

//                             const buPlaInfo = buplaResp.data.d?.results?.[0];

//                             if (buPlaInfo) {
//                                 obj.ewaybill_details_place_of_consignee = buPlaInfo.CityName;
//                                 obj.ewaybill_details_state_of_supply = buPlaInfo.Region;
//                                 obj.ewaybill_details_pincode_of_consignor = buPlaInfo.PostalCode;
//                                 obj.ewaybill_details_pincode_of_consignee = buPlaInfo.PostalCode;
//                                 obj.ewaybill_details_gstin_of_consignee = buPlaInfo.IN_GSTIdentificationNumber;
//                                 obj.seller_details_gstin = buPlaInfo.IN_GSTIdentificationNumber;
//                                 obj.seller_details_legal_name = buPlaInfo.AddresseeFullName;
//                                 obj.seller_details_address1 = buPlaInfo.StreetName;
//                                 obj.seller_details_location = buPlaInfo.AddressSearchTerm1;
//                                 obj.seller_details_pincode = buPlaInfo.PostalCode;
//                                 obj.seller_details_state_code = buPlaInfo.Region;
//                                 obj.transaction_details_user_gstin = buPlaInfo.IN_GSTIdentificationNumber;

//                             }
//                         }
//                     }
//                 } catch (e) {
//                     console.warn(
//                         `No BusinessPlace info found for BillingDocument ${bill.BillingDocument}`,
//                         e.message
//                     );
//                 }

//                 /* =========================
//                     SHIP-TO PARTNER (SP) + GSTIN
//                     ========================== */
//                 const spPartner = bill.to_Partner?.results?.find(
//                     p => p.PartnerFunction === 'SP'
//                 );

//                 if (spPartner?.Customer) {
//                     try {
//                         // Fetch BP info for SP partner (ship-to)
//                         const shipBpResp = await axios.get(
//                             `${BP_API}('${spPartner.Customer}')?$expand=to_BuPaIdentification,to_BusinessPartnerAddress`,
//                             { headers: getAuthHeader() }
//                         );

//                         const shipBp = shipBpResp.data.d || {};

//                         // Get GSTIN (BPIdentificationType = "IN3")
//                         const idEntry = shipBp.to_BuPaIdentification?.results?.find(
//                             id => id.BPIdentificationType === "IN3"
//                         );
//                         const gstin = idEntry?.BusinessPartnerInternalID || '';

//                         // Populate shipping details
//                         obj.ship_details_legal_name = shipBp.BusinessPartnerFullName || '';
//                         obj.ship_details_trade_name = shipBp.BusinessPartnerFullName || '';
//                         obj.ship_details_address1 = shipBp.to_BusinessPartnerAddress?.results?.[0]?.StreetName || '';
//                         obj.ship_details_address2 = '';
//                         obj.ship_details_location = shipBp.to_BusinessPartnerAddress?.results?.[0]?.CityName || '';
//                         obj.ship_details_pincode = shipBp.to_BusinessPartnerAddress?.results?.[0]?.PostalCode || '';
//                         obj.ship_details_state_code = shipBp.to_BusinessPartnerAddress?.results?.[0]?.Region || '';
//                         obj.ship_details_gstin = gstin;

//                     } catch (e) {
//                         console.warn(`No SP BP info found for Customer ${spPartner.Customer}:`, e.message);
//                     }
//                 }

//                 tempArray.push(obj);
//             }


//             return tempArray;

//         } catch (err) {
//             console.error("Error in getCombinedReport:", err);
//             return { error: 'Failed to fetch combined data', details: err.message };
//         }
//     });
// });



const cds = require('@sap/cds');
const axios = require('axios');

module.exports = cds.service.impl(async function () {

    const username = process.env.S4H_USERNAME || 'API_USER1_IN';
    const password = process.env.S4H_PASSWORD || '@#Store@12451@#Store@12451';

    const getAuthHeader = () => ({
        Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
        Accept: 'application/json'
    });

    const BILLING_API = 'https://my420267-api.s4hana.cloud.sap/sap/opu/odata/sap/API_BILLING_DOCUMENT_SRV/A_BillingDocument';
    const BP_API = 'https://my420267-api.s4hana.cloud.sap/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner';
    const PRODUCT_API = 'https://my420267-api.s4hana.cloud.sap/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product';
    const COMPANYCODE_CDS = 'https://my420267-api.s4hana.cloud.sap/sap/opu/odata/sap/YY1_VGS_COMPANYCODE_CDS/YY1_VGS_COMPANYCODE';
    const BUPLA_CDS = 'https://my420267-api.s4hana.cloud.sap/sap/opu/odata/sap/YY1_VGS_BUPLA_CDS/YY1_VGS_BUPLA';
    const BSEG1_CDS = 'https://my420267-api.s4hana.cloud.sap/sap/opu/odata/sap/YY1_VGS_BSEG1_CDS/YY1_VGS_BSEG1';

    const template = {
        additional_supporting_document_url: "",
        additional_supporting_document: "",
        additional_information: "",
        batch_name: "",
        batch_warranty_date: "",
        batch_expiry_date: "",
        buyer_gstin: "",
        buyer_legal_name: "",
        buyer_trade_name: "",
        buyer_place_of_supply: "",
        buyer_address1: "",
        buyer_address2: "",
        buyer_location: "",
        buyer_pincode: "",
        buyer_state_code: "",
        buyer_phone_number: "",
        buyer_email: "",
        cancel_einvoice_irn: "",
        cancel_einvoice_cancel_reason: "",
        cancel_einvoice_cancel_remarks: "",
        cancel_einvoice_ewaybill_cancel: "",
        cancel_eway_bill_eway_bill_number: "",
        cancel_eway_bill_reason_of_cancel: "",
        cancel_eway_bill_cancel_remark: "",
        cancel_eway_bill_data_source: "",
        contact_details_project_reference_number: "",
        contact_details_receipt_advice_number: "",
        contact_details_receipt_advice_date: "",
        contact_details_batch_reference_number: "",
        contact_details_contract_reference_number: "",
        contact_details_other_reference: "",
        contact_details_vendor_po_reference_number: "",
        contact_details_vendor_po_reference_date: "",
        dispatch_company_name: "",
        dispatch_address1: "",
        dispatch_address2: "",
        dispatch_location: "",
        dispatch_pincode: "",
        dispatch_state_code: "",
        document_companycode: "",
        document_type: "",
        document_number: "",
        document_date: "",
        document_AccountingDocument: "",
        document_FiscalYear: "",
        document_BillingDocumentIsCancelled: "",
        document_CancelledBillingDocument: "",
        einvoice_success_code: "",
        einvoice_nic_code: "",
        ewaybill_Status: "",
        ewaybill_code: "",
        ewaybill_details_transporter_id: "",
        ewaybill_details_transporter_name: "",
        ewaybill_details_transportation_mode: "",
        ewaybill_details_transportation_distance: "",
        ewaybill_details_transporter_document_number: "",
        ewaybill_details_transporter_document_date: "",
        ewaybill_details_vehicle_number: "",
        ewaybill_details_vehicle_type: "",
        ewaybill_details_sub_supply_type: "",
        ewaybill_details_gstin_of_consignor: "",
        ewaybill_details_legal_name_of_consignor: "",
        ewaybill_details_address1_of_consignor: "",
        ewaybill_details_address2_of_consignor: "",
        ewaybill_details_pincode_of_consignor: "",
        ewaybill_details_gstin_of_consignee: "",
        ewaybill_details_legal_name_of_consignee: "",
        ewaybill_details_address1_of_consignee: "",
        ewaybill_details_address2_of_consignee: "",
        ewaybill_details_place_of_consignee: "",
        ewaybill_details_pincode_of_consignee: "",
        ewaybill_details_state_of_supply: "",
        ewaybill_details_product_name: "",
        ewaybill_details_unit_of_product: "",
        ewaybill_details_cgst_rate: 0,
        ewaybill_details_sgst_rate: 0,
        ewaybill_details_igst_rate: 0,
        ewaybill_details_cess_rate: 0,
        ewaybill_details_ewayBillNo: "",
        ewaybill_details_ewayBillDate: "",
        ewaybill_details_mode_of_transport: "",
        ewaybill_details_group_number: "",
        ewaybill_details_remaining_distance: 0,
        ewaybill_details_place_of_consignor: "",
        ewaybill_details_reason_code_for_vehicle_updation: "",
        ewaybill_details_reason_for_vehicle_updation: "",
        ewaybill_details_state_of_consignor: "",
        ewaybill_details_old_vehicle_number: "",
        ewaybill_details_new_vehicle_number: "",
        ewaybill_details_old_transporter_document_number: "",
        ewaybill_details_new_transporter_document_number: "",
        ewaybill_details_taxable_amount: 0,
        export_details_ship_bill_number: "",
        export_details_ship_bill_date: "",
        export_details_port_code: "",
        export_details_refund_claim: "",
        export_details_foreign_currency: "",
        export_details_country_code: "",
        export_details_export_duty: 0,
        get_invoice_details_AckNo: "",
        get_invoice_details_AckDt: "",
        get_eway_bill_details_status: "",
        get_eway_bill_details_ewbno: "",
        get_eway_bill_details_ewbdt: "",
        get_eway_bill_details_ewbvalidtill: "",
        get_eway_bill_details_errorMessage: "",
        get_eway_bill_details_failed_status: "",
        get_eway_bill_details_code: "",
/*        item_list_item_serial_number: "",
        item_list_product_code: "",
        item_list_product_description: "",
        item_list_is_service: "",
        item_list_hsn_code: "",
        item_list_bar_code: "",
        item_list_quantity: 0,
        item_list_free_quantity: 0,
        item_list_unit: "",
        item_list_unit_price: 0,
        item_list_total_amount: 0,
        item_list_discount: 0,
        item_list_pre_tax_value: 0,
        item_list_other_charge: 0,
        item_list_assessable_value: 0,
        item_list_gst_rate: 0,
        item_list_igst_amount: 0,
        item_list_cgst_amount: 0,
        item_list_sgst_amount: 0,
        item_list_cess_nonadvol_amount: 0,
        item_list_cess_cess_amount: 0,
        item_list_cess_state_cess_amount: 0,
        item_list_cess_state_cess_nonadvol_amount: 0,
        item_list_order_line_reference: "",
        item_list_country_origin: "",
        item_list_product_serial_number: "",
        item_list_attribute_details: "",
        item_list_attribute_value: "",
        item_list_total_item_value: "",
*/        payment_details_bank_account_number: "",
        payment_details_paid_balance_amount: 0,
        payment_details_credit_days: 0,
        payment_details_direct_debit: "",
        payment_details_credit_transfer: "",
        payment_details_branch: "",
        payment_details_payment_mode: "",
        payment_details_payee_name: "",
        payment_details_payment_instruction: "",
        payment_details_outstanding_amount: 0,
        payment_details_payment_term: "",
        preceding_document_details_reference_of_original_invoice: "",
        preceding_document_details_preceding_invoice_date: "",
        preceding_document_details_other_reference: "",
        reference_details_other_reference: "",
        reference_details_invoice_period_start_date: "",
        reference_details_invoice_period_end_date: "",
        reference_details_invoice_reference_number: "",
        reference_details_invoice_remarks: "",
        seller_details_gstin: "",
        seller_details_legal_name: "",
        seller_details_trade_name: "",
        seller_details_address1: "",
        seller_details_address2: "",
        seller_details_location: "",
        seller_details_pincode: "",
        seller_details_state_code: "",
        seller_details_phone_number: "",
        seller_details_email: "",
        ship_details_gstin: "",
        ship_details_legal_name: "",
        ship_details_trade_name: "",
        ship_details_address1: "",
        ship_details_address2: "",
        ship_details_location: "",
        ship_details_pincode: "",
        ship_details_state_code: "",
        transaction_details_user_gstin: "",
        transaction_details_supply_type: "",
        transaction_details_charge_type: "",
        transaction_details_ecommerce_gstin: "",
        transaction_details_BillingDocumentType: "",
        transaction_details_igst_on_intra: "",
        value_details_total_assessable_value: 0,
        value_details_total_cgst_value: 0,
        value_details_total_sgst_value: 0,
        value_details_total_igst_value: 0,
        value_details_total_cess_value: 0,
        value_details_total_cess_value_of_state: 0,
        value_details_round_off_amount: 0,
        value_details_total_invoice_value: 0,
        value_details_total_discount: 0,
        value_details_total_other_charge: 0,
        value_details_total_invoice_value_additional_currency: 0,

        items: []
    };

    const itemTemplate = {
        item_list_item_serial_number: "",
        item_list_product_code: "",
        item_list_product_description: "",
        item_list_is_service: "",
        item_list_hsn_code: "",
        item_list_bar_code: "",

        item_list_quantity: 0.000,
        item_list_free_quantity: 0.000,
        item_list_unit: "",
        item_list_unit_price: 0.00,
        item_list_total_amount: 0.00,
        item_list_discount: 0.00,
        item_list_pre_tax_value: 0.00,
        item_list_other_charge: 0.00,
        item_list_assessable_value: 0.00,

        item_list_gst_rate: 0.00,
        item_list_igst_amount: 0.00,
        item_list_cgst_amount: 0.00,
        item_list_sgst_amount: 0.00,
        item_list_cess_nonadvol_amount: 0.00,
        item_list_cess_cess_amount: 0.00,
        item_list_cess_state_cess_amount: 0.00,
        item_list_cess_state_cess_nonadvol_amount: 0.00,

        item_list_order_line_reference: "",
        item_list_country_origin: "",
        item_list_product_serial_number: "",
        item_list_attribute_details: "",
        item_list_attribute_value: "",
        item_list_total_item_value: ""
    };



    this.on('getCombinedReport', async (req) => {
        try {
            const {
                CompanyCode, Plant, BillingDocType, BillingDocNo,
                BillingDateFrom, BillingDateTo, Customer, BusinessPlace
            } = req.data;

            if (!CompanyCode || !Plant || !BillingDateFrom || !BillingDateTo) {
                return { error: "CompanyCode, Plant, and Billing Date Range are mandatory!" };
            }

            /* =======================
               BUILD BILLING FILTER
            ======================== */
            let filters = [];

            if (CompanyCode?.length)
                filters.push(`(${CompanyCode.map(c => `CompanyCode eq '${c}'`).join(' or ')})`);

            if (BillingDocType?.length)
                filters.push(`(${BillingDocType.map(t => `BillingDocumentType eq '${t}'`).join(' or ')})`);

            if (BillingDocNo?.length)
                filters.push(`(${BillingDocNo.map(d => `BillingDocument eq '${d}'`).join(' or ')})`);

            if (BillingDateFrom && BillingDateTo)
                filters.push(
                    `BillingDocumentDate ge datetime'${BillingDateFrom}T00:00:00' and ` +
                    `BillingDocumentDate le datetime'${BillingDateTo}T23:59:59'`
                );

            if (Customer?.length)
                filters.push(`(${Customer.map(c => `SoldToParty eq '${c}'`).join(' or ')})`);

            const filterQuery = filters.join(' and ');

            /* =======================
               BILLING API PAGING
            ======================== */
            let billingDocs = [];
            let skip = 0;
            const batchSize = 100;

            while (true) {
                const res = await axios.get(
                    `${BILLING_API}?$filter=${filterQuery}&$top=${batchSize}&$skip=${skip}` +
                    `&$select=CompanyCode,BillingDocument,BillingDocumentCategory,` +
                    `BillingDocumentDate,AccountingDocument,FiscalYear,BillingDocumentType,TotalGrossAmount,` +
                    `BillingDocumentIsCancelled,CancelledBillingDocument,SoldToParty,to_Item,to_Partner&$expand=to_Partner,to_Item`,
                    { headers: getAuthHeader() }
                );

                const batch = res.data.d?.results || [];
                billingDocs.push(...batch);

                if (batch.length < batchSize) break;
                skip += batchSize;
            }

            /* ========================
               BUSINESS PARTNER PAGING
            ======================== */
            let allBusinessPartners = [];
            let bpSkip = 0;
            const bpBatchSize = 100;

            while (true) {
                const BPres = await axios.get(
                    `${BP_API}?$top=${bpBatchSize}&$skip=${bpSkip}` +
                    // `&$select=BusinessPartner,Customer,BusinessPartnerFullName` +
                    `&$expand=to_BusinessPartnerAddress,to_BuPaIdentification,to_BusinessPartnerBank,to_BusinessPartnerAddress/to_EmailAddress`,
                    { headers: getAuthHeader() }
                );

                const batch = BPres.data.d?.results || [];
                allBusinessPartners.push(...batch);

                if (batch.length < bpBatchSize) break;
                bpSkip += bpBatchSize;
            }

            /* ========================
               FILTER BP BY CUSTOMER
            ======================== */
            let filteredBusinessPartners = allBusinessPartners;

            if (Customer?.length) {
                const customerSet = new Set(Customer);
                filteredBusinessPartners = allBusinessPartners.filter(
                    bp => bp.Customer && customerSet.has(bp.Customer)
                );
            }

            /* ========================
               FAST LOOKUP MAP
            ======================== */
            const bpByCustomer = new Map();
            filteredBusinessPartners.forEach(bp => {
                bpByCustomer.set(bp.Customer, bp);
            });


            /* =======================
               COMPANY CODE PAGING
            ======================== */
            let comcodeskip = 0;
            const comcodeBatchSize = 100;
            let comcodeAllResults = [];

            const companyCodeFilter =
                CompanyCode?.length
                    ? `(${CompanyCode.map(c => `CompanyCode eq '${c}'`).join(' or ')})`
                    : '';

            while (true) {
                const response = await axios.get(
                    `${COMPANYCODE_CDS}?$filter=${companyCodeFilter}&$top=${comcodeBatchSize}&$skip=${comcodeskip}`,
                    { headers: getAuthHeader() }
                );

                const batch = response.data.d?.results || [];
                comcodeAllResults.push(...batch);

                if (batch.length < comcodeBatchSize) break;
                comcodeskip += comcodeBatchSize;
            }

            const companyCodeMap = {};
            comcodeAllResults.forEach(cc => {
                companyCodeMap[cc.CompanyCode] = cc;
            });

            /* ========================
               BUILD FINAL RESULT
            ======================== */
            let tempArray = [];

            for (const bill of billingDocs) {

                const obj = { ...template };
                obj.items = [];

                let igst_on_intra = "N"; // default

                /* ==========================
                   DOCUMENT DETAILS
                ========================== */
                obj.document_companycode = bill.CompanyCode || '';
                obj.document_type = bill.BillingDocumentType || '';
                obj.document_number = bill.BillingDocument || '';
                obj.document_date = bill.BillingDocumentDate || '';
                obj.document_AccountingDocument = bill.AccountingDocument || '';
                obj.document_FiscalYear = bill.FiscalYear || '';
                obj.document_BillingDocumentIsCancelled = bill.BillingDocumentIsCancelled == false ? "N" : "Y";
                obj.document_CancelledBillingDocument = bill.CancelledBillingDocument;
                obj.payment_details_payment_term = bill.CustomerPaymentTerms || '';
                obj.preceding_document_details_reference_of_original_invoice = bill.CancelledBillingDocument;
                obj.preceding_document_details_preceding_invoice_date = bill.BillingDocumentDate || '';
                obj.preceding_document_details_other_reference = bill.AccountingDocument || '';
                obj.reference_details_invoice_period_start_date = bill.BillingDocumentDate || '';
                obj.reference_details_invoice_period_end_date = bill.BillingDocumentDate || '';
                obj.reference_details_invoice_reference_number = bill.AccountingDocument || '';
                obj.transaction_details_BillingDocumentType = bill.BillingDocumentType || '';
                obj.value_details_total_invoice_value = bill.TotalGrossAmount || '00';


                /* ================= ITEM LOOP ================= */
                const items = bill.to_Item?.results || [];

                for (const it of items) {
                    const item = JSON.parse(JSON.stringify(itemTemplate));

                    item.item_list_item_serial_number = it.BillingDocumentItem;
                    item.item_list_quantity = it.BillingQuantity || 0;
                    item.item_list_unit = it.BaseUnit;
                    item.item_list_unit_price = it.NetAmount || 0;
                    item.item_list_total_amount = bill.TotalGrossAmount || 0;
                    item.item_list_discount = it.DiscountAmount || 0;
                    item.item_list_assessable_value = it.NetAmount || 0;
                    item.item_list_order_line_reference = it.BillingDocumentItem || 0;
                    item.item_list_country_origin = bill.Country || '';
                    item.item_list_product_serial_number = it.BillingDocumentItem || 0;
                    obj.items.push(item);
                }

                /* ==========================
                   BUYER (BP)
                ========================== */
                const bp = bpByCustomer.get(bill.SoldToParty);
                if (bp) {
                    obj.buyer_legal_name = bp.BusinessPartnerFullName || '';
                    obj.buyer_trade_name = bp.BusinessPartnerFullName || '';
                    obj.buyer_place_of_supply = bp.to_BusinessPartnerAddress?.results?.[0].Region || '';
                    obj.buyer_address1 = bp.to_BusinessPartnerAddress?.results?.[0].StreetName || '';
                    obj.buyer_address2 = '';
                    obj.buyer_location = bp.to_BusinessPartnerAddress?.results?.[0].CityName || '';
                    obj.buyer_pincode = bp.to_BusinessPartnerAddress?.results?.[0].PostalCode || '';
                    obj.buyer_state_code = bp.to_BusinessPartnerAddress?.results?.[0].Region || '';
                    obj.buyer_phone_number = '';
                    obj.buyer_email = bp.to_BusinessPartnerAddress?.results?.[0].to_EmailAddress?.results?.[0].EmailAddress || '';
                    obj.export_details_country_code = bp.to_BusinessPartnerAddress?.results?.[0].Country || '';
                    obj.payment_details_bank_account_number = bp?.to_BusinessPartnerBank?.results?.[0]?.BankAccount || '';
                    obj.payment_details_bank_account_number = bp?.to_BusinessPartnerBank?.results?.[0]?.BankNumber || '';
                    obj.seller_details_trade_name = bp.BusinessPartnerFullName || '';
                }

                /* =================================
                   DISPATCH (COMPANY CODE – DEFAULT)
                ==================================== */
                const company = companyCodeMap[bill.CompanyCode];
                if (company) {
                    obj.dispatch_company_name = company.CompanyCodeName || '';
                    obj.dispatch_address1 = company.StreetName || '';
                    obj.dispatch_address2 = '';
                    obj.dispatch_location = company.CityName || '';
                    obj.dispatch_pincode = company.PostalCode || '';
                    obj.dispatch_state_code = company.Region || '';
                }

                /* =================================
                   DISPATCH OVERRIDE (BSEG1 → BUPLA)
                ==================================== */
                try {
                    const billInfoResp = await axios.get(
                        `${BILLING_API}('${bill.BillingDocument}')?$select=AccountingDocument,FiscalYear,CompanyCode`,
                        { headers: getAuthHeader() }
                    );

                    const billInfo = billInfoResp.data.d || {};
                    const { AccountingDocument, FiscalYear, CompanyCode } = billInfo;

                    if (AccountingDocument && FiscalYear && CompanyCode) {

                        const bsegResp = await axios.get(
                            `${BSEG1_CDS}?$filter=` +
                            `AccountingDocument eq '${AccountingDocument}' and ` +
                            `FiscalYear eq '${FiscalYear}' and ` +
                            `CompanyCode eq '${CompanyCode}' and ` +
                            `FinancialAccountType eq 'D'` +
                            `&$select=BusinessPlace`,
                            { headers: getAuthHeader() }
                        );

                        const businessPlace =
                            bsegResp.data.d?.results?.[0]?.BusinessPlace;

                        if (businessPlace) {
                            const buplaResp = await axios.get(
                                `${BUPLA_CDS}?$filter=BusinessPlace eq '${businessPlace}'` +
                                `&$select=BusinessPlace,PostalCode,Region,CityName,StreetName,IN_GSTIdentificationNumber`,
                                { headers: getAuthHeader() }
                            );

                            const buPlaInfo = buplaResp.data.d?.results?.[0];

                            if (buPlaInfo) {
                                obj.ewaybill_details_place_of_consignee = buPlaInfo.CityName;
                                obj.ewaybill_details_state_of_supply = buPlaInfo.Region;
                                obj.ewaybill_details_pincode_of_consignor = buPlaInfo.PostalCode;
                                obj.ewaybill_details_pincode_of_consignee = buPlaInfo.PostalCode;
                                obj.ewaybill_details_gstin_of_consignee = buPlaInfo.IN_GSTIdentificationNumber;
                                obj.seller_details_gstin = buPlaInfo.IN_GSTIdentificationNumber;
                                obj.seller_details_legal_name = buPlaInfo.AddresseeFullName;
                                obj.seller_details_address1 = buPlaInfo.StreetName;
                                obj.seller_details_location = buPlaInfo.AddressSearchTerm1;
                                obj.seller_details_pincode = buPlaInfo.PostalCode;
                                obj.seller_details_state_code = buPlaInfo.Region;
                                obj.transaction_details_user_gstin = buPlaInfo.IN_GSTIdentificationNumber;

                            }
                        }
                    }
                } catch (e) {
                    console.warn(
                        `No BusinessPlace info found for BillingDocument ${bill.BillingDocument}`,
                        e.message
                    );
                }

                /* =========================
                    SHIP-TO PARTNER (SP) + GSTIN
                    ========================== */
                const spPartner = bill.to_Partner?.results?.find(
                    p => p.PartnerFunction === 'SP'
                );

                if (spPartner?.Customer) {
                    try {
                        // Fetch BP info for SP partner (ship-to)
                        const shipBpResp = await axios.get(
                            `${BP_API}('${spPartner.Customer}')?$expand=to_BuPaIdentification,to_BusinessPartnerAddress`,
                            { headers: getAuthHeader() }
                        );

                        const shipBp = shipBpResp.data.d || {};

                        // Get GSTIN (BPIdentificationType = "IN3")
                        const idEntry = shipBp.to_BuPaIdentification?.results?.find(
                            id => id.BPIdentificationType === "IN3"
                        );
                        const gstin = idEntry?.BusinessPartnerInternalID || '';

                        // Populate shipping details
                        obj.ship_details_legal_name = shipBp.BusinessPartnerFullName || '';
                        obj.ship_details_trade_name = shipBp.BusinessPartnerFullName || '';
                        obj.ship_details_address1 = shipBp.to_BusinessPartnerAddress?.results?.[0]?.StreetName || '';
                        obj.ship_details_address2 = '';
                        obj.ship_details_location = shipBp.to_BusinessPartnerAddress?.results?.[0]?.CityName || '';
                        obj.ship_details_pincode = shipBp.to_BusinessPartnerAddress?.results?.[0]?.PostalCode || '';
                        obj.ship_details_state_code = shipBp.to_BusinessPartnerAddress?.results?.[0]?.Region || '';
                        obj.ship_details_gstin = gstin;

                    } catch (e) {
                        console.warn(`No SP BP info found for Customer ${spPartner.Customer}:`, e.message);
                    }
                }





                tempArray.push(obj);
            }


            return tempArray;

        } catch (err) {
            console.error("Error in getCombinedReport:", err);
            return { error: 'Failed to fetch combined data', details: err.message };
        }
    });



});

