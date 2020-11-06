//
//  IssueManager.swift
//  IssueTracker
//
//  Created by 강민석 on 2020/10/27.
//

import Foundation
import hvNetwork

class IssueManager {
    
    init() {
    }
    
    func get(completion: @escaping (([Issue]) -> Void)) {
        let headers = ["Authorization": Constant.token]
        hvNet.request("http://49.50.163.58:3000/api/issue/?state=all", method: .get, headers: headers).response { (result: HVDataResponse<IssueResponse>) in
            switch result {
            case .success(let issues):
                completion(issues.data)
            case .failure:
                completion([])
            }
        }
    }
    
    func create(title: String, content: String?) {
        let headers = ["Authorization": Constant.token]
        let parameters = ["title": title, "content": content ?? ""] as Parameters
        hvNet.request("http://49.50.163.58:3000/api/issue/", method: .post, parameter: parameters, headers: headers).response { (result: HVDataResponse<Data?>) in
            switch result {
            case .success:
                NotificationCenter.default.post(name: .issueDidChanged, object: nil)
            case.failure(let error):
                print(error.localizedDescription)
            }
        }
    }
	
	func delete(with issue: Issue) {
        let id = issue.id
        let headers = ["Authorization": Constant.token]
        
        hvNet.request("http://49.50.163.58:3000/api/issue/\(id)", method: .delete, headers: headers).response { (result: HVDataResponse<Data?>) in
            switch result {
            case .success:
                NotificationCenter.default.post(name: .issueDidChanged, object: nil)
            case.failure(let error):
                print(error.localizedDescription)
            }
        }
	}
	
	func close(with issue: [Issue]) {
        let ids = issue.map { $0.id }
        let parameters = ["state" : 0, "issueIds" : ids] as [String : Any]
        let headers = ["Authorization": Constant.token]

        hvNet.request("http://49.50.163.58:3000/api/issue/state", method: .put, parameter: parameters, headers: headers).response { (result: HVDataResponse<Data?>) in
            switch result {
            case .success:
                NotificationCenter.default.post(name: .issueDidChanged, object: nil)
            case.failure(let error):
                print(error.localizedDescription)
            }
        }
        
	}

}

extension IssueManager {
    enum Constant {
        static let token = ""
    }
}